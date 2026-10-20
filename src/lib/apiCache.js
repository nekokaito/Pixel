const API_BASE = import.meta.env.VITE_API_URL || "https://pixels-server.vercel.app";
const STORAGE_PREFIX = "pixels:api:";
const VERSION = "v2";
const memoryCache = new Map();

function storageKey(url) {
  return `${STORAGE_PREFIX}${VERSION}:${url}`;
}

function readStorage(url) {
  try {
    const raw = localStorage.getItem(storageKey(url));
    if (!raw) return null;
    const entry = JSON.parse(raw);
    if (!entry || entry.data === undefined) return null;
    return entry;
  } catch {
    return null;
  }
}

function writeStorage(url, data) {
  try {
    const entry = { timestamp: Date.now(), data };
    localStorage.setItem(storageKey(url), JSON.stringify(entry));
    return entry;
  } catch {
    return { timestamp: Date.now(), data };
  }
}

async function requestJson(url) {
  const response = await fetch(url, {
    headers: { Accept: "application/json" },
    cache: "default",
  });

  if (!response.ok) {
    throw new Error(`Request failed: ${response.status}`);
  }

  return response.json();
}

export function getApiUrl(path) {
  return `${API_BASE}${path}`;
}

export async function cachedFetchJson(
  url,
  { ttl = 30_000, backgroundRefresh = true } = {},
) {
  const now = Date.now();
  const memory = memoryCache.get(url);
  const stored = memory ?? readStorage(url);
  const timestamp = stored?.timestamp ?? 0;
  const hasData = stored?.data !== undefined;
  const fresh = hasData && now - timestamp < ttl;

  if (hasData) {
    memoryCache.set(url, stored);

    if (!fresh && backgroundRefresh) {
      void refreshJson(url).catch(() => undefined);
    }

    return stored.data;
  }

  return refreshJson(url);
}

async function refreshJson(url) {
  const data = await requestJson(url);
  const entry = writeStorage(url, data);
  memoryCache.set(url, entry);
  return data;
}

export function invalidateApiCache(match = "/items") {
  const matcher =
    typeof match === "function"
      ? match
      : (key) => key.includes(String(match));

  for (const key of [...memoryCache.keys()]) {
    if (matcher(key)) memoryCache.delete(key);
  }

  try {
    const keys = [];
    for (let index = 0; index < localStorage.length; index += 1) {
      const key = localStorage.key(index);
      if (key?.startsWith(`${STORAGE_PREFIX}${VERSION}:`)) keys.push(key);
    }

    for (const key of keys) {
      const url = key.slice(`${STORAGE_PREFIX}${VERSION}:`.length);
      if (matcher(url)) localStorage.removeItem(key);
    }
  } catch {
    // localStorage can be unavailable in private/restricted contexts.
  }
}

export function clearApiCache() {
  memoryCache.clear();
  try {
    const keys = [];
    for (let index = 0; index < localStorage.length; index += 1) {
      const key = localStorage.key(index);
      if (key?.startsWith(`${STORAGE_PREFIX}${VERSION}:`)) keys.push(key);
    }
    keys.forEach((key) => localStorage.removeItem(key));
  } catch {
    // Ignore storage errors.
  }
}

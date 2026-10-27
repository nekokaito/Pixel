import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import { cachedFetchJson, getApiUrl } from "../../lib/apiCache";
import { createCommission, getArtist } from "../../lib/storefront";

const ArtistStorefront = () => {
  const { uid } = useParams();
  const { user } = useContext(AuthContext);
  const [artist, setArtist] = useState(null);
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [form, setForm] = useState({
    title: "",
    brief: "",
    referenceUrl: "",
    budget: "",
  });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  useEffect(() => {
    let active = true;
    setLoading(true);
    getArtist(uid)
      .then(async (profile) => {
        if (!active) return;
        setArtist(profile);
        if (profile) {
          document.title = `${profile.name} | Pixel`;
          const products = await cachedFetchJson(
            getApiUrl(`/items/email/${encodeURIComponent(profile.email)}`),
          );
          if (active) setItems(Array.isArray(products) ? products : []);
        }
      })
      .catch((reason) => active && setError(reason.message))
      .finally(() => active && setLoading(false));
    return () => {
      active = false;
    };
  }, [uid]);

  const submit = async (event) => {
    event.preventDefault();
    setSending(true);
    setError("");
    try {
      await createCommission(user, artist, form);
      setSent(true);
      setForm({ title: "", brief: "", referenceUrl: "", budget: "" });
    } catch (reason) {
      setError(reason.message);
    } finally {
      setSending(false);
    }
  };

  if (loading) return <p className="p-10">Loading storefront…</p>;
  if (!artist)
    return (
      <p className="p-10" role="alert">
        {error || "This storefront does not exist."}
      </p>
    );

  return (
    <div className="my-10 overflow-hidden rounded-2xl bg-base-100 shadow-xl">
      {artist.bannerUrl && (
        <img
          className="h-48 w-full object-cover md:h-64"
          src={artist.bannerUrl}
          alt=""
        />
      )}
      <header className="p-6 md:p-10">
        <div className="flex items-center gap-4">
          {artist.avatarUrl && (
            <img
              className="h-16 w-16 rounded-full object-cover"
              src={artist.avatarUrl}
              alt=""
            />
          )}
          <div>
            <h1 className="font-pixel text-4xl">{artist.name}</h1>
            <p>Artist storefront</p>
          </div>
        </div>
        {artist.bio && (
          <p className="mt-5 max-w-2xl whitespace-pre-wrap">{artist.bio}</p>
        )}
      </header>
      <section className="px-6 pb-8 md:px-10">
        <h2 className="font-pixel text-3xl">Artwork</h2>
        {items.length === 0 ? (
          <p className="mt-4">No artwork listed yet.</p>
        ) : (
          <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((item) => (
              <Link
                key={item._id}
                to={`/${item._id}`}
                className="overflow-hidden rounded-xl border border-base-300 bg-base-200 hover:shadow-lg"
              >
                <img
                  src={item.photo_url}
                  alt={item.item_name}
                  className="aspect-[4/3] w-full object-cover"
                />
                <div className="p-4">
                  <h3 className="font-bold">{item.item_name}</h3>
                  <p>{item.price}৳</p>
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>
      <section className="border-t border-base-300 bg-base-200 p-6 md:p-10">
        <h2 className="font-pixel text-3xl">Request a commission</h2>
        {user?.uid === uid ? (
          <p className="mt-3">
            This is your storefront.{" "}
            <Link className="link" to="/studio">
              Edit it
            </Link>
            .
          </p>
        ) : !user ? (
          <p className="mt-3">
            <Link className="link" to="/login" state={`/artists/${uid}`}>
              Sign in
            </Link>{" "}
            to send a request.
          </p>
        ) : sent ? (
          <p className="mt-3" role="status">
            Request sent.{" "}
            <Link className="link" to="/orders">
              Track it in your orders
            </Link>
            .
          </p>
        ) : (
          <form onSubmit={submit} className="mt-5 grid max-w-xl gap-4">
            <input
              className="input input-bordered"
              aria-label="Project title"
              placeholder="Project title"
              value={form.title}
              onChange={(e) => setForm({ ...form, title: e.target.value })}
              maxLength={120}
              required
            />
            <textarea
              className="textarea textarea-bordered min-h-32"
              aria-label="Project description"
              placeholder="Describe what you would like"
              value={form.brief}
              onChange={(e) => setForm({ ...form, brief: e.target.value })}
              maxLength={3000}
              required
            />
            <input
              className="input input-bordered"
              type="url"
              aria-label="Reference image URL"
              placeholder="Reference image URL (optional)"
              value={form.referenceUrl}
              onChange={(e) =>
                setForm({ ...form, referenceUrl: e.target.value })
              }
              maxLength={500}
            />
            <label>
              Estimated budget (৳)
              <input
                className="input input-bordered mt-2 w-full"
                type="number"
                min="0"
                step="1"
                value={form.budget}
                onChange={(e) => setForm({ ...form, budget: e.target.value })}
                required
              />
            </label>
            {error && (
              <p className="text-error" role="alert">
                {error}
              </p>
            )}
            <button className="btn bg-[#ca678c] text-white" disabled={sending}>
              {sending ? "Sending…" : "Send request"}
            </button>
          </form>
        )}
      </section>
    </div>
  );
};

export default ArtistStorefront;

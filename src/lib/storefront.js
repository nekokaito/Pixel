import { getFirestore, collection, doc, getDoc, getDocs, query, where, setDoc, addDoc, updateDoc, serverTimestamp } from "firebase/firestore";
import app from "../firebase/firebase.config";

const db = getFirestore(app);
const artists = collection(db, "artists");
const commissions = collection(db, "commissions");

export async function getArtist(uid) {
  const snapshot = await getDoc(doc(artists, uid));
  return snapshot.exists() ? { id: snapshot.id, ...snapshot.data() } : null;
}

export async function saveArtist(user, details) {
  if (!user?.uid || !user?.email) throw new Error("Sign in to create your storefront.");
  const name = details.name.trim();
  if (!name) throw new Error("Enter a shop name.");
  await setDoc(doc(artists, user.uid), {
    uid: user.uid,
    email: user.email,
    name,
    bio: details.bio.trim(),
    bannerUrl: details.bannerUrl.trim(),
    avatarUrl: user.photoURL || "",
    updatedAt: serverTimestamp(),
  });
}

export async function createCommission(user, artist, details) {
  if (!user?.uid) throw new Error("Sign in to request a commission.");
  if (user.uid === artist.uid) throw new Error("You cannot request your own commission.");
  const title = details.title.trim();
  const brief = details.brief.trim();
  if (!title || !brief) throw new Error("Add a title and project description.");
  await addDoc(commissions, {
    artistId: artist.uid,
    buyerId: user.uid,
    buyerEmail: user.email || "",
    artistName: artist.name,
    title,
    brief,
    referenceUrl: details.referenceUrl.trim(),
    budget: Number(details.budget),
    status: "requested",
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
  });
}

export async function getMyCommissions(uid) {
  const [selling, buying] = await Promise.all([
    getDocs(query(commissions, where("artistId", "==", uid))),
    getDocs(query(commissions, where("buyerId", "==", uid))),
  ]);
  const map = (snapshot) => snapshot.docs.map((item) => ({ id: item.id, ...item.data() }));
  return { selling: map(selling), buying: map(buying) };
}

export async function setCommissionStatus(id, status) {
  await updateDoc(doc(commissions, id), { status, updatedAt: serverTimestamp() });
}

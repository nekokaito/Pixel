import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import { AuthContext } from "../../provider/AuthProvider";
import { getArtist, saveArtist } from "../../lib/storefront";

const ArtistStudio = () => {
  const { user } = useContext(AuthContext);
  const [form, setForm] = useState({ name: "", bio: "", bannerUrl: "" });
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [published, setPublished] = useState(false);

  useEffect(() => {
    document.title = "Artist studio | Pixel";
    let active = true;
    getArtist(user.uid)
      .then((artist) => {
        if (!active) return;
        if (artist) {
          setForm({
            name: artist.name,
            bio: artist.bio,
            bannerUrl: artist.bannerUrl,
          });
          setPublished(true);
        } else {
          setForm((current) => ({ ...current, name: user.displayName || "" }));
        }
      })
      .catch((reason) => active && setError(reason.message));
    return () => {
      active = false;
    };
  }, [user]);

  const update = (event) =>
    setForm({ ...form, [event.target.name]: event.target.value });
  const submit = async (event) => {
    event.preventDefault();
    setSaving(true);
    setError("");
    try {
      await saveArtist(user, form);
      setPublished(true);
      toast.success("Storefront saved");
    } catch (reason) {
      setError(reason.message);
    } finally {
      setSaving(false);
    }
  };

  return (
    <section className="mx-auto my-10 max-w-3xl rounded-2xl bg-base-100 p-6 shadow-xl md:p-10">
      <h1 className="font-pixel text-4xl">Your artist studio</h1>
      <p className="mt-2">
        Create a public page for your art and commission requests.
      </p>
      {published && (
        <div className="mt-5 flex flex-wrap gap-3">
          <Link className="btn btn-outline" to={`/artists/${user.uid}`}>
            View storefront
          </Link>
          <Link className="btn btn-outline" to="/orders">
            Manage requests
          </Link>
          <Link className="btn btn-outline" to="/add_items">
            Add artwork
          </Link>
        </div>
      )}
      <form onSubmit={submit} className="mt-8 space-y-5">
        <label className="form-control">
          <span className="label-text mb-2">Shop name</span>
          <input
            className="input input-bordered"
            name="name"
            value={form.name}
            onChange={update}
            maxLength={80}
            required
          />
        </label>
        <label className="form-control">
          <span className="label-text mb-2">About your work</span>
          <textarea
            className="textarea textarea-bordered min-h-32"
            name="bio"
            value={form.bio}
            onChange={update}
            maxLength={1000}
            placeholder="Your style, materials, and the commissions you accept"
          />
        </label>
        <label className="form-control">
          <span className="label-text mb-2">Banner image URL</span>
          <input
            className="input input-bordered"
            type="url"
            name="bannerUrl"
            value={form.bannerUrl}
            onChange={update}
            maxLength={500}
            placeholder="https://..."
          />
        </label>
        {error && (
          <p role="alert" className="text-error">
            {error}
          </p>
        )}
        <button className="btn bg-[#ca678c] text-white" disabled={saving}>
          {saving
            ? "Saving…"
            : published
              ? "Save changes"
              : "Publish storefront"}
        </button>
      </form>
    </section>
  );
};

export default ArtistStudio;

import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";

const ItemCard = ({ item }) => {
  const { theme } = useContext(AuthContext);
  const { _id, item_name, subcategory_Name, price, photo_url } = item;

  return (
    <article
      className={`w-full max-w-[420px] overflow-hidden rounded-2xl border shadow-md transition-transform duration-300 hover:scale-[0.98] ${
        theme === "dark"
          ? "border-white/10 bg-black/65 text-white"
          : "border-black/5 bg-white/90 text-black"
      }`}
    >
      <div className="p-4 font-pixel">
        <h2 className="text-2xl leading-tight">{item_name}</h2>
        <p className="text-sm opacity-75">{subcategory_Name}</p>
      </div>

      <div className="aspect-[4/3] w-full overflow-hidden bg-black/5">
        <img
          src={photo_url}
          loading="lazy"
          decoding="async"
          alt={item_name}
          width="640"
          height="480"
          className="h-full w-full object-cover"
        />
      </div>

      <div className="flex items-center gap-4 p-4">
        <h3 className="font-roboto text-lg">{price}৳</h3>
        <Link to={`/${_id}`} className="ml-auto">
          <button type="button" className="btn font-pixel">
            View Details
          </button>
        </Link>
      </div>
    </article>
  );
};

export default ItemCard;

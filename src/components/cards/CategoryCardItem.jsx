import { Link } from "react-router-dom";
import RatingStars from "../RatingStars";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { CiViewList } from "react-icons/ci";

const CategoryCardItem = ({ item }) => {
  const {
    _id,
    item_name,
    subcategory_Name,
    price,
    photo_url,
    rating,
    customization,
    stockStatus,
  } = item;

  const inStock = stockStatus === "In stock";

  return (
    <article className="my-6 w-full max-w-[320px] overflow-hidden rounded-2xl bg-black shadow-md transition-transform duration-300 hover:scale-[0.98]">
      <div className="aspect-[4/3] w-full overflow-hidden">
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

      <div className="p-4 text-white">
        <p className="font-roboto text-xs opacity-75">{subcategory_Name}</p>

        <Link to={`/${_id}`} className="font-roboto font-bold hover:underline">
          {item_name}
        </Link>

        <div className="mt-2 flex items-center gap-2 text-xs md:text-sm">
          <MdOutlineDashboardCustomize size={13} />
          <span className="font-semibold">Customization:</span>
          <span className="font-pixel opacity-90">{customization}</span>
        </div>

        <div className="mt-3 flex items-center gap-2">
          <span className="text-xl font-bold">{price}৳</span>
          <span
            className={`rounded-full px-2 py-1 text-xs font-semibold ${
              inStock ? "bg-green-600/90" : "bg-red-600/90"
            }`}
          >
            {stockStatus}
          </span>
        </div>

        <div className="mt-2">
          <RatingStars value={rating} />
        </div>
      </div>

      <div className="px-4 pb-4">
        <Link to={`/${_id}`}>
          <button type="button" className="btn w-full">
            <CiViewList /> View Details
          </button>
        </Link>
      </div>
    </article>
  );
};

export default CategoryCardItem;

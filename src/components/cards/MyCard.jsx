import { FiEdit } from "react-icons/fi";
import { MdDeleteForever, MdOutlineDashboardCustomize } from "react-icons/md";
import { Link } from "react-router-dom";
import RatingStars from "../RatingStars";
import Swal from "sweetalert2";
import { invalidateApiCache } from "../../lib/apiCache";

const MyCard = ({ myItem, onDeleted }) => {
  const {
    _id,
    item_name,
    subcategory_Name,
    price,
    photo_url,
    rating,
    customization,
    stockStatus,
  } = myItem;

  const itemDelete = async (id) => {
    const sound = new Audio("/pop-up.mp3");
    sound.play().catch(() => {});

    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    });

    if (!result.isConfirmed) return;

    try {
      const response = await fetch(`https://pixels-server.vercel.app/items/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) throw new Error("Delete request failed");

      const data = await response.json();

      if (data.deletedCount > 0) {
        await Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });

        invalidateApiCache("/items");
        invalidateApiCache("/items/email/");
        onDeleted?.(id);
      }
    } catch (error) {
      console.error(error);
      Swal.fire({
        title: "Error",
        text: "The item could not be deleted.",
        icon: "error",
      });
    }
  };

  return (
    <article className="my-6 w-full max-w-[320px] overflow-hidden rounded-2xl bg-black text-white shadow-md transition-transform duration-300 hover:scale-[0.98]">
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

      <div className="p-4">
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
              stockStatus === "In stock" ? "bg-green-600/90" : "bg-red-600/90"
            }`}
          >
            {stockStatus}
          </span>
        </div>

        <div className="mt-2">
          <RatingStars value={rating} />
        </div>
      </div>

      <div className="flex w-full justify-evenly px-4 pb-4">
        <Link to={`/update_item/${_id}`}>
          <button type="button" className="btn">
            <FiEdit /> Edit
          </button>
        </Link>

        <button
          type="button"
          onClick={() => itemDelete(_id)}
          className="btn border-none hover:bg-red-700"
        >
          <MdDeleteForever /> Delete
        </button>
      </div>
    </article>
  );
};

export default MyCard;

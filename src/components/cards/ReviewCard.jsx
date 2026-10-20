import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import RatingStars from "../RatingStars";

const ReviewCard = ({ rev }) => {
  const { id, name, review, image, rating } = rev;
  const { theme } = useContext(AuthContext);

  return (
    <div className="sticky top-0 mx-auto w-full max-w-xl px-8 py-12">
      <article
        className={`h-auto min-h-[250px] overflow-hidden rounded-2xl p-5 shadow-md ${
          theme === "dark" ? "bg-black text-white" : "bg-white text-black"
        }`}
        style={{ top: `calc(1rem * ${id + 1})` }}
      >
        <div className="flex items-center justify-between gap-4">
          <img
            src={image}
            alt={name}
            width="56"
            height="56"
            loading="lazy"
            decoding="async"
            className="h-14 w-14 rounded-full object-cover"
          />

          <RatingStars value={rating} />
        </div>

        <div className="mt-5">
          <h2
            className={`font-pixel text-2xl font-bold ${
              theme === "dark" ? "text-[#ff5cb8]" : "text-[#d45364]"
            }`}
          >
            {name}
          </h2>

          <p className="mt-2 font-roboto text-sm font-extralight leading-6 opacity-90">
            {review}
          </p>
        </div>
      </article>
    </div>
  );
};

export default ReviewCard;

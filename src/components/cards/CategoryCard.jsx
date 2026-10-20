import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";

const CategoryCard = ({ item }) => {
  const { theme } = useContext(AuthContext);
  const { image, name } = item;
  const url = name.replace(/\s/g, "_");

  return (
    <Link to={`/category/${url}`} className="block w-full max-w-[420px]">
      <article
        className={`overflow-hidden rounded-2xl border shadow-md transition-transform duration-300 hover:scale-[0.98] ${
          theme === "dark"
            ? "border-white/10 bg-black/65 text-white"
            : "border-black/5 bg-white/90 text-black"
        }`}
      >
        <div className="p-4 font-pixel">
          <h2 className="text-2xl leading-tight">{name}</h2>
        </div>

        <div className="aspect-[4/3] w-full overflow-hidden bg-black/5">
          <img
            src={image}
            loading="lazy"
            decoding="async"
            alt={name}
            width="640"
            height="480"
            className="h-full w-full object-cover"
          />
        </div>
      </article>
    </Link>
  );
};

export default CategoryCard;

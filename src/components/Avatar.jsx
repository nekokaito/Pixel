import { useMemo, useState } from "react";

const Avatar = ({
  src,
  name = "User",
  email = "",
  size = "h-12 w-12",
  className = "",
}) => {
  const [imageFailed, setImageFailed] = useState(false);

  const initials = useMemo(() => {
    const value = String(name || email || "User").trim();
    const parts = value.split(/\s+/).filter(Boolean);

    if (parts.length >= 2) {
      return `${parts[0][0]}${parts[1][0]}`.toUpperCase();
    }

    return value.slice(0, 2).toUpperCase();
  }, [name, email]);

  const hasImage = Boolean(src) && !imageFailed;

  return (
    <div
      className={`flex ${size} shrink-0 items-center justify-center overflow-hidden rounded-full bg-[#3c1c33] text-white ${className}`}
      aria-label={`${name}'s avatar`}
    >
      {hasImage ? (
        <img
          src={src}
          alt={`${name}'s avatar`}
          loading="lazy"
          decoding="async"
          referrerPolicy="no-referrer"
          className="h-full w-full object-cover"
          onError={() => setImageFailed(true)}
        />
      ) : (
        <span className="select-none text-sm font-bold font-pixel">
          {initials}
        </span>
      )}
    </div>
  );
};

export default Avatar;

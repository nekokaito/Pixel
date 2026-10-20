const RatingStars = ({ value = 0, interactive = false, onChange, name = "rating" }) => {
  const current = Math.max(0, Math.min(5, Number(value) || 0));

  if (interactive) {
    return (
      <div className="flex items-center gap-1" role="radiogroup" aria-label={name}>
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            type="button"
            role="radio"
            aria-checked={current === star}
            aria-label={`${star} star${star > 1 ? "s" : ""}`}
            onClick={() => onChange?.(star)}
            className={`text-2xl leading-none transition-transform hover:scale-110 ${
              star <= current ? "text-amber-400" : "text-gray-400"
            }`}
          >
            ★
          </button>
        ))}
      </div>
    );
  }

  return (
    <div className="flex items-center gap-0.5" aria-label={`${current} out of 5 stars`}>
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          aria-hidden="true"
          className={`text-lg leading-none ${
            star <= current ? "text-amber-400" : "text-gray-400/60"
          }`}
        >
          ★
        </span>
      ))}
    </div>
  );
};

export default RatingStars;

const LoadingSpinner = ({ theme = "light" }) => (
  <div className="flex min-h-[320px] items-center justify-center" aria-label="Loading" role="status">
    <div className="relative flex h-20 w-20 items-center justify-center">
      <div
        className={`h-20 w-20 animate-spin rounded-full border-4 ${
          theme === "light" ? "border-[#d45364]/20 border-t-[#d45364]" : "border-white/20 border-t-white"
        }`}
      />
      <img
        className="absolute h-9 w-9 object-contain"
        src={theme === "light" ? "/Pixel_Logo_fav.png" : "/Pixel_Logo_dark_fav.png"}
        alt=""
        aria-hidden="true"
        width="36"
        height="36"
      />
    </div>
  </div>
);

export default LoadingSpinner;

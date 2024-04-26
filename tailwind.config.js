/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  themes: [
    "light",
    "dracula",
  ],
  plugins: [require("daisyui")], 
}

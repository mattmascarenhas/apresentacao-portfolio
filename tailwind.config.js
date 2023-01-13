/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      backgroundImage: {
        gradientblack: "url('/bg-black.png')",
        gradientwhite: "url('/bg-white.png')",
      },
    },
  },
  plugins: [],
};

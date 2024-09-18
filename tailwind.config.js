/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
        reddit: ["Reddit Sans Condensed", "system-ui"],
        unlock: ["Unlock", "serif"],
        play: ["Playwrite CU", "cursive"],
        // Add the Google font here
      },
      screens: {
        md: "960px",
        // => @media (min-width: 960px) { ... }
      },
    },
  },
  plugins: [],
};

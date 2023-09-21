/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "500px",
        tablet: "990px",
        lg: "1080px",
        xl: "1265px",
      },
      fontFamily: {
        "twitter-chirp": ["TwitterChirp", "sans-serif"],
        "twitter-chirp-extended": ["TwitterChirpExtendedHeavy", "sans-serif"],
      },
      colors: {
        "main-primary": "#1c9bef",
        "main-secondary": "#0f141a",
        "gray-bg": "#f8fafa",
        "darker-gray-bg": "#eff3f4",
      },
    },
  },
  plugins: [],
};

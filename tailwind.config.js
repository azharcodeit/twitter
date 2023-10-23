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
        "twitter-chirp": ["TwitterChirpRegular", "sans-serif"],
        "twitter-chirp-extended-heavy": [
          "TwitterChirpExtendedHeavy",
          "sans-serif",
        ],
      },
      colors: {
        "main-primary": "#1c9bef",
        "main-secondary": "#0f141a",
        "secondary-text": "#536471",
        "red-like": "#f91880",
        "repost-green": "#00ba7c",
        "gray-bg": "#f8fafa",
        "darker-gray-bg": "#eff3f4",
        "bg-gray": "#cfd9de",
        "gray-text": "#536471",
      },
    },
  },
  plugins: [],
};

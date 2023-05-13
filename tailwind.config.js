/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      sans: ["Montserrat", ...defaultTheme.fontFamily.sans],
      serif: ["Georgia", ...defaultTheme.fontFamily.serif],
      caveat: ["Caveat", ...defaultTheme.fontFamily.serif],
    },
    extend: {
      colors: {
        background: "#d5faff",
        background_dark: "#000078",
      },
    },
  },
  plugins: [],
};

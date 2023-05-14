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
        body_color: "#000078",
        background: "#d5faff",
        background_dark: "#000078",
        primary: "#563d7c",
        secondary: "#868e96",
        success: "#28a745",
        danger: "#dc3545",
        info: "#17a2b8",
        warning: "#ffc107",
        light: "#f8f9fa",
        dark: "#343434",
        input_bg: "#f8f9fa",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    //
  ],
};

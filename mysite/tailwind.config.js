/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./src/*.{html,js}", "./src/components/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
  purge: ["./public/**/*.html", "./src/**/*.{js,jsx,ts,tsx,vue}"],
};

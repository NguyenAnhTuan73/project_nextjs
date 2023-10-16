/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      white: "#fff",
      black: "#000",
      red: "#FF0000",
      gray: colors.gray,
    },
    extend: {},
  },
  plugins: [],
};

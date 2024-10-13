/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        custom1: ["Сustom1", "Righteous"],
        custom2: ["Сustom2", "sans-serif"],
      }
    },
  },
  plugins: [],
}
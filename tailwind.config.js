/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./public/index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Open Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

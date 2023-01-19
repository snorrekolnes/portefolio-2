/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['*.{html,js}'],
  theme: {
    extend: {
      fontFamily: {
        "caveat": "Caveat', cursive",
        "Josefin": "'Josefin Sans', sans-serif",
        "Indie": "'Indie Flower', cursive",
      },
      colors: {
        "FRAM-LIGHT-BROWN": "#CB8677",
        "FRAM-PINK": "#DO9E93",
        "FRAM-DARK-BROWN": "#271A14",
        "FRAM-WHITE": "#E9E5E4",
        "FRAM-TEAL": "#7BA69A",
      }
    },
  },
  plugins: [],
}

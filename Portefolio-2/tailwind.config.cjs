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
        "FRAM-PINK": "#D09E93",
        "FRAM-DARK-BROWN": "#271A14",
        "FRAM-WHITE": "#E9E5E4",
        "FRAM-TEAL": "#7BA69A",
      }, screens: {

        'lMobile': '425px',

        'tablet': '740px',
        // => @media (min-width: 640px) { ... }
                                          
        'laptop': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'desktop': '1280px',
        // => @media (min-width: 1280px) { ... }
      }
    },
  },
  plugins: [],
}

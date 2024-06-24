/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'hover1': '#FA5252',
        'hover2': '#DD2476',
      },
      boxShadow: {
        '6xl': '0px 4px 4px rgba(0, 0, 0, 0)',
      }
    },
    container: {
      center: true,
    },
    fontFamily: {
      'poppins': ["Poppins", "sans-serif"],
      'roboto' :["Roboto Slab", "serif"]
    },
  },
  plugins: [],
}
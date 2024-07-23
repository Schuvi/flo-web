/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gothic_1: '#ed8c34',
        gothic_2: '#e4dfe6',
        gothic_3: '#2d3a3f',
        gothic_4: '#03282d',
        gothic_5: '#c55021'
      },
      fontFamily: {
        'gothic': ['Abel', 'sans-serif']
      },
      width: {
        25: '205px'
      },
      screens: {
        xsm: '400px'
      }
    },
  },
  plugins: [],
}


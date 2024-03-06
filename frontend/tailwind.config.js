/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        main: '#393E41',
        second: '#D3D0CB',
        bg: '#FFFAFF',
        third: '#E2C044',
        fourth: '#587B7F',
        fifth: '#1E2019',
        darkmode: {
          main: '#CCCCCC',
          second: '#AAAAAA',
          bg: '#333333',
          third: '#FF0000',
          fourth: '#000000',
        }
      }
    },
  },
  plugins: [],
}
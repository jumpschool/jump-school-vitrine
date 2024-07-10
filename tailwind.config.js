/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          customPink: '#DE245C',
        },
        fontFamily: {
          'oswald': ['Oswald', 'sans-serif'],
        },
      },
    },
    plugins: [],
  }
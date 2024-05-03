/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'Montserrat': ['Montserrat', 'sans serif'],
    },
    fontSize: {
      '3.5': '3.5rem',
      '1.5': '1.5rem',
      '1.75': '1.75rem',
    },
    extend: {
      backgroundImage: {
        'iut-slide1': "url('./src/assets/images/iut-slide1.jpg')",
        'iut_slide2': "url('./src/assets/images/iut_slide2.jpg')",
        'iut_slide3': "url('./src/assets/images/iut_slide3.jpg')",
      },
      height: {
        '85': '85vh',
      },
      colors: {
        'bleue': '#0170b9',
      },
    },
  },
  plugins: [],
}
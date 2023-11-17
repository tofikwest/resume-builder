/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundColor: {
        'primary-color': 'black',
        'additional-color': '#7070e5', //purple
        'additional-hover-color': '#5555b4', //purple
      },
      textColor: {
        'additional-color': '#7070e5', //purple
        'additional-hover-color': '#5555b4', //purple
      },
    },
    fontFamily: {
      garamond: 'Garamond, serif-serif',
      math: 'math',
    },
  },
  plugins: [],
}

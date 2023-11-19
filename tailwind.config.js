/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundColor: {
        'primary-color': 'black',
        'additional-color': '#7070e5', //purple
        'additional-hover-color': '#5555b4', //purple
        'primary-red': '#fe7d8b',
        'primary-green': 'rgb(231, 244, 237)',
        'input-bg': 'rgb(239, 242, 249)',
      },
      borderColor: {
        'primary-color': 'black',
        'additional-color': '#7070e5', //purple
        'additional-hover-color': '#5555b4', //purple
      },
      outlineColor: {
        'primary-color': 'black',
        'additional-color': '#7070e5', //purple
        'additional-hover-color': '#5555b4', //purple
      },
      textColor: {
        'additional-color': '#7070e5', //purple
        'additional-hover-color': '#5555b4', //purple
        'primary-green': 'rgb(33, 125, 71)',
      },
      fontFamily: {
        'form-family':
          'TT Commons,system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,Cantarell,Noto Sans,sans-serif',
      },
    },
    fontFamily: {
      garamond: 'Garamond, serif-serif',
      math: 'math',
    },
  },
  plugins: [],
}

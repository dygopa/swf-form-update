/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './index.html',
    './src/**/*.jsx'
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#FF6D00"
      },
      screens: {
        ...defaultTheme.screens,
        'xs': '175px',
      }
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        neutra: ["Neutra", "sans-serif"],
      },
      transitionProperty: {
        'width': 'width'
      },
    },
  },
  plugins: [
    plugin(
      function ({ addComponents }) {
        const myComponents = {
          '.color-transition': {
            transition: 'color .3s ease-in',
          },
        }
        addComponents(myComponents)
      }),],
}

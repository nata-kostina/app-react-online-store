/** @type {import('tailwindcss').Config} */

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
  plugins: [],
}

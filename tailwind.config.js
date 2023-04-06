/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {
      fontFamily: {
        'arimo': 'Arimo, sans-serif',
      }
    },
  },
  plugins: [require("daisyui")],
}


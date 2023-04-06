/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.js"],
  theme: {
    extend: {
      backgroundImage: {
        'defaultRaz': "url('/src/assets/images/raz-bg.webp')"
      }

    },
  },
  plugins: [require("daisyui")],
}


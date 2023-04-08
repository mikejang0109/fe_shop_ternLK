/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-black": "#1A1A1A",
        "secondary-black": "#212121",
        "primary-gray": "#4D4D4D",
        "secondary-gray": "#D8D8D8",
        "tertiary-gray": "#979797",
        "accent-red": "#D94141",
      },
      fontFamily : {
        arimo: ["Arimo", "sans-serif"]
      },
      backgroundImage: {
        'defaultRaz': "url('/src/assets/images/raz-bg.webp')"
      }
    },
  },
  variants: {
    display: ["group-hover"]
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [],
  },
}


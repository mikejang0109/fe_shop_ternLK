/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
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
      fontFamily: {
        arimo: ["Arimo", "sans-serif"],
        playFair: ["Playfair Display", "serif"],
        openSans: ["Open Sans", "sans-serif"],
        playFairItalic: ["Playfair Display Italic", "serif"],
      },
      backgroundImage: {
<<<<<<< HEAD
        defaultRaz: "url('/src/assets/images/raz-bg.webp')",
        "home-bg": "url('/src/assets/images/homepage-bg.webp')",
      },
=======
        'defaultRaz': "url('/src/assets/images/raz-bg.webp')",
        'home-bg': "url('/src/assets/images/homepage-bg.webp')",
        'advert-bg': "url('/src/assets/images/ad-bg.webp')",
        'timeline-bg': "url('/src/assets/icons/truck-icon.svg')"
      }
>>>>>>> 22fb1f22412b4be5a8294de0e5bdfc22ce2350e6
    },
  },
  variants: {
    display: ["group-hover"],
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [],
  },
};

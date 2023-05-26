/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/*.html","./build/js/*.js"],
  theme: {
    extend: {
      keyframes: {
        'hamburger': {
          '0%': {transform: 'scaleY(0)' },
          '80%': {transform: 'scaleY(1.2)' },
          '100%': {transform: 'scaleY(1)' },


        },
      },
      animation: {
        'hamburger': 'hamburger 0.5s ease 0.5s forwards ',
      },
    },
  },
  plugins: [],
}


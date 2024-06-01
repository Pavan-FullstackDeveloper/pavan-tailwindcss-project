/** @type {import('tailwindcss').Config} */

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        body:["Nunito"]
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

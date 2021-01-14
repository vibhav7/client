module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      maxHeight: {
        '90': '90vh'
      },
      minWidth: {
        'xs': '320px',
        'sm': '640px',
      }
    },
  },
  variants: {
    extend: {

    },
  },
  plugins: [],
}
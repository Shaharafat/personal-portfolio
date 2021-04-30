module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      backgroundColor: {
        purpleDark: '#3C2F5E'
      },
      fontFamily: {
        merriweather: ['Merriweather', 'sans-serif'],
        openSans: ['Open Sans', 'serif'],
      },
      colors: {
        darkBlue: '#7178BC',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      backgroundColor: {
        purpleDark: "#3C2F5E",
        electroMagnetic: "#2f3640",
        purpleDarkUltra: '#2a2142',
      },
      fontFamily: {
        merriweather: ["Merriweather", "sans-serif"],
        openSans: ["Open Sans", "serif"],
      },
      colors: {
        darkBlue: "#7178BC",
        electroMagnetic: "#2f3640",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

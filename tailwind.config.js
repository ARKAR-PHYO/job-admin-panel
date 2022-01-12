module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],

  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        Hind: ["Hind", "sans-serif"],
      },
      boxShadow: {
        "038-bs": "0px 3px 8px rgba(0, 0, 0, 0.24)",
      },
    },
  },
  variants: {
    extend: {
      borderWidth: ["responsive", "last"],
      opacity: ["disabled"],
    },
  },
  plugins: [require("@tailwindcss/forms")],
};

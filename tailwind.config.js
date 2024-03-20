/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        Primary: "#0A192F",
        secondary: "#F97316",
        tretiary: "#54D688",
        btncol: "#68e3e8",
      },
    },
    screens: {
      xl: { max: "1279px" },

      sm: { max: "639px" },
    },
  },
  plugins: [],
};

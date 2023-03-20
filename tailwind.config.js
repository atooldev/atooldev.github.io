/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Inter", "sans-serif"],
    },
    colors: {
      ...require("tailwindcss/colors"),
      "brand-blue": "#070e24",
      "brand-background": "#000212",
      "brand-blue-light": "#0c1632",
      "brand-blue-extra-light": "#599de8",
    },
    extend: {},
  },
  plugins: [],
}
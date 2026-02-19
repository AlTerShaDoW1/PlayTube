/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ytDark: "#0f0f0f",
        ytLight: "#f9f9f9",
        ytGray: "#272727",
        ytBorder: "#303030",
        ytHover: "#3f3f3f",
        ytRed: "#ff0000"
      },
      fontFamily: {
        sans: ["Roboto", "system-ui", "sans-serif"]
      }
    }
  },
  plugins: []
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        red: "#FF5959",
        line: "#DCDCDC",
        grey: "#716F6F",
        lightGrey: "#F0F0F0",
        purple: "#854DFF",
        black: "#151515",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};

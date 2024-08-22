/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FAF9F8",
        secondary: "#F2E9E4",
        button: "#5C9C9D",
        buttonHover: "#7CB5B6",
        accent: "#9FD5D3",
        navbar: "#F8F6F4",
        scrollbarTrack: "#FAF9F8",
        scrollbarThumbHover: "#9fcbc9",
      },
      fontFamily: {
        sans: [
          "Arimo",
          "system-ui",
          "Avenir",
          "Helvetica",
          "Arial",
          "sans-serif",
        ],
      },
    },
  },
  plugins: [],
};

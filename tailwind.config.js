/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        theme: {
          dark: "#102326",
          light: "#F8F2E8",
          accent: "#F0C633",
          border: "#F8F2E8",
          paragraphs: "#F8F2E8",
        },
      },
    },
  },
  plugins: [],
};

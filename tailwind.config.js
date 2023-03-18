/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        article1: "url('/src/images/article1.png')",
        article2: "url('/src/images/article2.png')",
        article3: "url('/src/images/article3.png')",
      },
    },
  },
  plugins: [],
};

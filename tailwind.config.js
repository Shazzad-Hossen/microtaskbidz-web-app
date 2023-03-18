/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        article1: "url('/src/images/article1.png')",
        article2: "url('/src/images/article2.png')",
        article3: "url('/src/images/article3.png')",
        formbg:
          "linear-gradient( 115.7deg,  rgba(3,79,135,1) 6.2%, rgba(0,184,214,1) 112.9% )",
      },
    },
  },
  plugins: [],
};

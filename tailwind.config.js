/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        mintGreen: "#8DD3BB",
        blackishGreen: "#112211",
        colorText: "#1C1B1F",
        grey: "#79747E",
      },
      backgroundImage: {
        intro: "url('img/intro.png')",
      },
    },
  },
  plugins: [],
};

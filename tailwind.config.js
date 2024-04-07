const tailwindcss = require("tailwindcss");
const autoprefixer = require("autoprefixer");

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "1.25rem",
        screens: {
          "3xl": "950px",
        },
      },
      boxShadow: {
        "4xl": "0px 30px 50px rgba(0, 0, 0, 1)",
      },
      colors: {
        grey: "#888",
        greylight: "#1E1D22",
      },
      animation: {
        "spin-slow": "spin 20s linear infinite",
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
      },
    },
  },
  plugins: [tailwindcss, autoprefixer],
};

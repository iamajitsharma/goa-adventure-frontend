const { transform } = require("typescript");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },

      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      backgroundColor: {
        blackOverlay: "rgba(0, 0 ,0 ,0.4)",
      },
      backgroundImage: {
        worldPattern: "url('../../public/assets/worldmap.svg')",
        hero: "url('/assets/hero.png')",
      },
      backgroundSize: ({ theme }) => ({
        auto: "auto",
        cover: "cover",
        contain: "contain",
        ...theme("spacing"),
      }),
      colors: {
        mainColor: "#FF6100",
        variantColor: "#FF9E4D",
        variantLight: "rgba(251, 197, 151, 0.36)",
        lightGray: "#F5F5F5",
        textGray: "#CACACA",
        textBlack: "#333333",
        blackOverlay: "rgba(0, 0 ,0 ,0.7)",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};

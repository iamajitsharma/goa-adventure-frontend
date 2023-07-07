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
        merri: ["Merriweather", "serif"],
      },

      backgroundImage: {
        worldPattern: "url('../../public/assets/worldmap.svg')",
        hero: "url('/assets/cover.jpeg')",
        gradiantBg: "linear-gradient(to top, rgba(0,0,0,0.9), transparent 50%)",
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
        primary: "#FF8359",
        secondary: "#1BE8EE",
        variant: "#252243",
        yellow: "#FFD659",
        lightBg: "#FFF8EF",
        blackOverlay: "rgba(0, 0 ,0 ,0.9)",
        lightOverlay: "rgba(0, 0 ,0 ,0.3)",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};

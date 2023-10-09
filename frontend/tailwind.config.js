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
      boxShadow: {
        "3xl":
          "rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px",
        "4xl":
          "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        merri: ["Merriweather", "serif"],
        roboto: ["Roboto", "sans-serif"],
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

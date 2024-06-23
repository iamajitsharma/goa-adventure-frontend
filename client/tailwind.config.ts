import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        lightBg: "#FFF8EF",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
      boxShadow: {
        shadow1: "box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;",
        shadow2: "box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;",
        shadow3: "box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;",
      },
    },
  },
  plugins: [],
};
export default config;

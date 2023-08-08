import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        first: "#FFFFFF",
        second: "#4894FE",
        three: "#1F2024",
        fourth: "#4B5768",
        // fifth
        // sixth
        seventh: "#494A50",
        // eighth
        // ninth
        // tenth
      },
      fontFamily: {
        roboto: ["Roboto, sans-serif"],
        inter: ["Inter, sans-serif"],
        plus: ["Plus Jakarta Sans, sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;

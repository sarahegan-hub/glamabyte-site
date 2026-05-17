import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        obsidian: "#010000",
        brilliance: "#F0EBE3",
        pink: "#D92E85",
        gold: "#C9A84C",
        aqua: "#00FFFF",
        purple: "#8A00C4",
      },
      fontFamily: {
        display: ["Bodoni MT Black", "Bedoni MT Black", "Bodoni MT", "Didot", "serif"],
        sans: ["Aptos", "Aptos Body", "DM Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;

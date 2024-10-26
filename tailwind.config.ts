import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: 'class', // Enables dark mode based on a class
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        purple: "#7E22CE",
      },
    },
  },
  plugins: [],
};
export default config;

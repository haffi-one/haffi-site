import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "green-1": "#43E97B",
        "green-2": "#65D90A",
        "gray-dark-1": "#1E1E1E",
        "gray-dark-2": "#445045",
      },
      fontFamily: {
        pixellari: ["Lato", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;

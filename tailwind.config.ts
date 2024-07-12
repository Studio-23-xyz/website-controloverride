import type { Config } from "tailwindcss";

const config: Config = {
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
      height:{
        '45vh': '45vh',
        '65vh': '65vh',
      },
      fontSize:{
        "1.7vw" : "1.7vw",
      },
       padding: {
        'item-padding-x': '0', 
        'item-padding-10y': '10px',
      },
      margin: {
        'ml-10': '1rem',
        'ml-0': '0',
      }
    },
  },
  plugins: [],
};
export default config;

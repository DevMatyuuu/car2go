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
      fontFamily: { 
        poppins : ['Poppins, sans-serif']
      },
      backgroundColor: {
        primary: '#971F20'
      },
      textColor: {
        primary: '#971F20'
      },
      scale: {
        '102': '1.01'
      }
    },
  },
  plugins: [],
};
export default config;

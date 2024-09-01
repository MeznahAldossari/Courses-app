import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: '#7E30E1',
        secondary:'#d8b4fe',
        third:'#374151',
        orange:'#FF8343',
        gray:'#f1f3f4',
        green:'#92b8c0'

      }
    },
  },
  plugins: []
};
export default config;

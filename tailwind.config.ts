import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  plugins: [],
  theme: {
    extend: {
      gridTemplateColumns: {
        '26': 'repeat(26, minmax(1rem, 1fr))',
        '18': 'repeat(18, minmax(0, 1fr))',
      },
      gridColumn: {
        'span-18': 'span 18 / span 18',
      },
      gridTemplateRows: {
        '20': 'repeat(20, minmax(0, 1fr))',
        '18': 'repeat(18, minmax(0, 1fr))',
      },
      gridRow: {
        'span-18': 'span 18 / span 18',
      }
    },
  },
  important: true, // super important line NO DELETE PLZ PLS
};

export default config;

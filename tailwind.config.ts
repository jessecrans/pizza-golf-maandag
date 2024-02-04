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
        '26': 'repeat(26, minmax(0, 1fr))',
        '18': 'repeat(18, minmax(0, 1fr))', // Added col-span-18
      },
      gridColumn: {
        'span-18': 'span 18 / span 18', // Added col-span-18
      }
    },
  },
};

export default config;

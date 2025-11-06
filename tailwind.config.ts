import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./features/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: '#e4a408',
          highlight: '#fff2cc',
        },
      },
      fontFamily: {
        sans: ['var(--font-pretendard-regular)', 'sans-serif'],
        heading: ['var(--font-pretendard-medium)', 'sans-serif'],
        'heading-en': ['var(--font-eb-garamond)', 'serif'],
        'baskervville': ['var(--font-baskervville)', 'serif'],
      },
    },
  },
  plugins: [],
};

export default config;

import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./data/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#172321",
        muted: "#66736f",
        accent: "#387b68",
        canvas: "#f7f8f5",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        display: ["var(--font-space)", "sans-serif"],
      },
      boxShadow: {
        soft: "0 16px 48px -24px rgba(22, 43, 36, 0.18)",
      },
    },
  },
  plugins: [],
};

export default config;

import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        rose:    { DEFAULT: "#C4788A", light: "#F2DEED", dark: "#a85e70" },
        cream:   { DEFAULT: "#FAFAF8", warm: "#F5F0EB" },
        ink:     { DEFAULT: "#2B2118", muted: "#7A6860" },
        peach:   "#F2C4A0",
        sage:    "#ADBCA5",
        lavender:"#C5BBDA",
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "Georgia", "serif"],
        body:    ["var(--font-plus-jakarta)", "sans-serif"],
        mono:    ["var(--font-dm-mono)", "monospace"],
      },
      borderRadius: { "4xl": "2rem", "5xl": "3rem" },
      animation: {
        "float":       "float 6s ease-in-out infinite",
        "blob":        "blob 12s ease-in-out infinite",
        "scroll-left": "scroll-left 30s linear infinite",
      },
      keyframes: {
        float:  { "0%,100%": { transform: "translateY(0)" }, "50%": { transform: "translateY(-12px)" } },
        blob:   { "0%,100%": { borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%" }, "50%": { borderRadius: "30% 60% 70% 40% / 50% 60% 30% 60%" } },
        "scroll-left": { from: { transform: "translateX(0)" }, to: { transform: "translateX(-50%)" } },
      },
    },
  },
  plugins: [],
};
export default config;

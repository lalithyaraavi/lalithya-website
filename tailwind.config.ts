import type { Config } from "tailwindcss";

// Lali Air palette: vintage travel-poster colours.
// The old colour names (rose, cream, ink...) are kept so every page picks up the new palette.
const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        rose:    { DEFAULT: "#B4472C", light: "#E9D5C2", dark: "#8E3721" }, // brick
        cream:   { DEFAULT: "#FBF6EC", warm: "#F2EBDD" },
        ink:     { DEFAULT: "#22281F", muted: "#5E5A4E" },
        peach:   "#D9A23A", // mustard
        sage:    "#36533F", // forest
        lavender:"#4E6A86", // denim
        mustard: "#D9A23A",
        forest:  "#36533F",
        denim:   "#4E6A86",
        plum:    "#6E4256",
        olive:   "#8B8A4C",
        dusty:   "#D39C8E",
        sand:    "#E8D7B5",
      },
      fontFamily: {
        display: ["var(--font-serif)", "Georgia", "serif"],
        body:    ["var(--font-sans)", "system-ui", "sans-serif"],
        mono:    ["var(--font-mono)", "monospace"],
        hand:    ["var(--font-hand)", "cursive"],
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

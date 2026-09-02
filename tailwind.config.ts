import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#FBF2E6",
        surface: "#FFFCF6",
        border: "#EAD9C0",
        ink: "#2B2318",
        "ink-muted": "#7C6E58",
        sage: { 50: "#E4F1E1", 500: "#74B183", 700: "#2E5B3B" },
        blue: { 50: "#E3EDFB", 500: "#6FA0DE", 700: "#28518C" },
        coral: { 50: "#FCE9DA", 500: "#EC9A67", 700: "#93502A" },
        lavender: { 50: "#EFE7FA", 500: "#AD8EDB", 700: "#5C3D90" },
      },
      fontFamily: {
        display: ["var(--font-display)"],
        body: ["var(--font-body)"],
      },
    },
  },
  plugins: [],
};
export default config;

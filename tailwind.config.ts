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
        primary: "#0DCF72",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-main":
          "linear-gradient(135deg, rgba(30,30,30,1) 0%, rgba(63,69,128,1) 25%, rgba(106,150,108,1) 50%, rgba(63,69,128,1) 75%, rgba(30,30,30,1) 100%)",
      },
      dropShadow(utils) {
        return { primary: "0 0 24px #0DCF72" };
      },
    },
  },
  plugins: [],
};
export default config;

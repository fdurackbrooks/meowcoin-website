import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        grandstander: ["grandstander", "sans"],
        poppins: ["poppins"],
      },
      colors: {
        "minty-fresh": "#c7d8c1",
        "swampy-green": "#353d3e",
      },
      height: {
        "max-minus-96": "calc(100% - 96px)",
      },
      screens: {
        "3xl": "1800px",
      }
    },
  },
  plugins: [],
};
export default config;

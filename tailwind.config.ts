import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1440px",
    },
    extend: {
      colors: {
        lime: "#C6F42A",
        "lime-hover": "#b3de21",
        black: "#000000",
        dark: "#111111",
        muted: "#666666",
        "border-color": "#E5E5E5",
        "border-dark": "#222222",
        "card-bg": "#F9F9F9",
        "bg-grey": "#F4F4F4",
      },
      fontFamily: {
        sans: ["var(--font-montserrat)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      borderRadius: {
        none: "0px",
        sharp: "2px",
        pill: "9999px",
      },
      letterSpacing: {
        tightest: "-0.03em",
        tighter: "-0.01em",
        normal: "0",
        wide: "0.05em",
        wider: "0.1em",
        widest: "0.15em",
        brand: "0.2em",
      },
      boxShadow: {
        card: "0 4px 20px rgba(0, 0, 0, 0.06)",
        header: "0 2px 10px rgba(0, 0, 0, 0.15)",
        pill: "0 2px 8px rgba(0, 0, 0, 0.18)",
      },
    },
  },
  plugins: [],
};

export default config;

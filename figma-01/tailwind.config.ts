import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        mypink:"#F98585",
        myblack:"#21243D",
        background: "#f6f1f0",
        recentbackground:"#F4E2E2",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
} satisfies Config;

import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-satoshi)", "system-ui", "sans-serif"],
      },
      fontSize: {
        // Hero section typography
        "hero-title": ["66px", { lineHeight: "73px", fontWeight: "500" }],
        "hero-body": ["25px", { lineHeight: "100%", fontWeight: "300" }],

        // Reusable typography scale
        display: ["66px", { lineHeight: "73px", fontWeight: "500" }],
        "heading-1": ["48px", { lineHeight: "56px", fontWeight: "500" }],
        "heading-2": ["36px", { lineHeight: "44px", fontWeight: "500" }],
        "heading-3": ["28px", { lineHeight: "36px", fontWeight: "500" }],
        "body-lg": ["25px", { lineHeight: "100%", fontWeight: "300" }],
        body: ["18px", { lineHeight: "150%", fontWeight: "400" }],
        "body-sm": ["16px", { lineHeight: "150%", fontWeight: "400" }],
      },
      colors: {
        border: "var(--border)",
        input: "var(--border)",
        ring: "var(--accent)",
        background: "var(--background)",
        surface: "var(--surface)",
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: "var(--accent)",
          foreground: "var(--accent-foreground)",
        },
        secondary: {
          DEFAULT: "var(--surface)",
          foreground: "var(--foreground-secondary)",
        },
        destructive: {
          DEFAULT: "var(--destructive)",
          foreground: "var(--destructive-foreground)",
        },
        muted: {
          DEFAULT: "var(--surface-alt)",
          foreground: "var(--foreground-secondary)",
        },
        accent: {
          DEFAULT: "var(--accent)",
          foreground: "var(--accent-foreground)",
        },
        card: {
          DEFAULT: "var(--background)",
          foreground: "var(--foreground)",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [],
}

export default config

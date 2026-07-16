import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        orbit: {
          bg: "#F7F3EC",
          surface: "#FFFDF7",
          ink: "#111111",
          muted: "#4A443E",
          border: "#111111",
          orange: "#F97316",
          yellow: "#FACC15",
          olive: "#8A9A5B",
          sky: "#7DD3FC",
          red: "#EF4444",
          green: "#22C55E",
        },
      },
      borderRadius: {
        "orbit-sm": "10px",
        "orbit-md": "16px",
        "orbit-lg": "20px",
        "orbit-xl": "28px",
      },
      borderWidth: {
        orbit: "2px",
      },
      boxShadow: {
        "orbit-sm": "4px 4px 0 #111111",
        "orbit-md": "6px 6px 0 #111111",
        "orbit-lg": "10px 10px 0 #111111",
      },
      fontFamily: {
        heading: ["var(--font-heading)", "system-ui", "-apple-system", "sans-serif"],
        body: ["var(--font-body)", "system-ui", "-apple-system", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;

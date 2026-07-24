import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        parchment: "#FBF4E8",
        parchment2: "#F4E9D6",
        ink: "#2B2013",
        indigo: {
          DEFAULT: "#213A63",
          deep: "#152744",
        },
        blossom: {
          DEFAULT: "#E9A9C0",
          deep: "#C6567F",
          tint: "#FDEEF3",
        },
        sage: {
          DEFAULT: "#5C7A5E",
          deep: "#4F6B4F",
          tint: "#EAF0E7",
          tintText: "#3F553F",
        },
        gold: {
          DEFAULT: "#C79A3E",
          light: "#E4C77A",
        },
      },
      fontFamily: {
        display: ["var(--font-playfair)", "serif"],
        body: ["var(--font-source-serif)", "serif"],
      },
      backgroundImage: {
        "grain": "url('/images/texture-paper.png')",
      },
      boxShadow: {
        card: "0 12px 30px -12px rgba(43, 32, 19, 0.25)",
      },
      borderRadius: {
        book: "4px 10px 10px 4px",
      },
    },
  },
  plugins: [],
};
export default config;

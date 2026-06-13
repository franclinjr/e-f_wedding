import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Paleta extraída do convite: tons de papel cru/off-white,
        // tinta preto-acinzentado para textos e selo, e verde-sálvia
        // suave usado nas folhagens decorativas.
        cream: {
          50: "#FCFAF6",
          100: "#F7F3EC",
          200: "#F1EBE0",
          300: "#E8DFD0",
        },
        ink: {
          DEFAULT: "#2B2A28",
          light: "#4A4845",
          muted: "#7A766F",
        },
        sage: {
          DEFAULT: "#A6AD8E",
          light: "#C6CBB6",
          dark: "#848C6E",
        },
        seal: "#1F1E1C",
      },
      fontFamily: {
        // Serifada elegante (títulos / monograma) e script (detalhes)
        serif: ["var(--font-playfair)", "Georgia", "serif"],
        script: ["var(--font-script)", "cursive"],
        sans: ["var(--font-sans)", "Helvetica", "Arial", "sans-serif"],
      },
      letterSpacing: {
        widest2: "0.35em",
      },
      backgroundImage: {
        "paper-texture":
          "radial-gradient(circle at 50% 0%, rgba(166,173,142,0.05), transparent 60%)",
      },
      animation: {
        "fade-up": "fadeUp 0.8s ease-out forwards",
        "fade-in": "fadeIn 1s ease-out forwards",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};

export default config;

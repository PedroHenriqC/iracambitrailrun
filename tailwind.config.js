/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      colors: {
        forest: {
          50: "#f0f7f0",
          100: "#d9ecd9",
          200: "#b3d9b3",
          300: "#7cba7c",
          400: "#4d9b4d",
          500: "#2d7d2d",
          600: "#1e6b1e",
          700: "#165516",
          800: "#0f3d0f",
          900: "#0a2a0a",
          950: "#050d07",
        },

        earth: {
          50: "#faf5f0",
          100: "#f0e4d4",
          200: "#dfc5a0",
          300: "#c9a070",
          400: "#b07d48",
          500: "#8b5e30",
          600: "#6d4624",
          700: "#52331a",
          800: "#3a2412",
          900: "#25170b",
        },

        trail: {
          gold: "#c9a84c",
          amber: "#d4762a",
          moss: "#5a7a3a",
        },

        bluenix: {
          forest950: "#050d07",
          forest900: "#0f2d1e",
          forest700: "#1e5b3a",
          green500: "#18a56a",
          green400: "#2ecc71",
          gold500: "#b78a3e",
          sand100: "#f6f4ee",
          sand200: "#ece8de",
          light: "#f8f7f2",
          muted: "#b9c7bd",
          dark: "#172019",
        },

        cream: {
          DEFAULT: "#f5f0e8",
          muted: "rgba(245, 240, 232, 0.64)",
          subtle: "rgba(245, 240, 232, 0.42)",
        },
      },

      fontFamily: {
        display: ['"Sora"', "system-ui", "sans-serif"],
        body: ['"Inter"', "system-ui", "sans-serif"],
        mono: [
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "Monaco",
          "Consolas",
          "monospace",
        ],
      },

      boxShadow: {
        soft: "0 24px 80px rgba(0, 0, 0, 0.28)",
        green: "0 22px 70px rgba(24, 165, 106, 0.24)",
        gold: "0 18px 60px rgba(201, 168, 76, 0.2)",
      },

      borderRadius: {
        premium: "1.5rem",
        "premium-lg": "2rem",
      },

      backgroundImage: {
        noise:
          "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.4'/%3E%3C/svg%3E\")",

        "forest-premium":
          "radial-gradient(circle at 10% 0%, rgba(46, 204, 113, 0.16), transparent 32rem), radial-gradient(circle at 90% 12%, rgba(201, 168, 76, 0.11), transparent 26rem), linear-gradient(180deg, #050d07 0%, #0a2a0a 42%, #050d07 100%)",

        "gold-gradient": "linear-gradient(135deg, #c9a84c, #d4762a)",

        "green-gradient": "linear-gradient(135deg, #18a56a, #2ecc71)",
      },
    },
  },

  plugins: [],
};

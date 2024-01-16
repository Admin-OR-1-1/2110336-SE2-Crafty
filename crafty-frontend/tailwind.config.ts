import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    colors: {
      ct_primary: {
        light: "#4A629E",
        DEFAULT: "#113DA7",
        dark: "#06163B"
      },
      ct_second: {
        light: "#C1EBE1",
        DEFAULT: "#98DECD",
        dark: "#629A8C"
      },
      ct_tert: {
        light: "#44A4AD",
        DEFAULT: "#006D77",
        dark: "#004147"
      },
      ct_com: {
        light: "#FFCA80",
        DEFAULT: "#FFA62B",
        dark: "#99641A"
      },
      ct_black: {
        DEFAULT: "#232323"
      },
      ct_negative: {
        DEFAULT: "#DE1135"
      },
      ct_red: {
        light: "#EB7086",
        dark: "#850A20"
      },
      ct_positive: {
        DEFAULT: "#00C93F"
      },
      ct_green: {
        light: "#5CD782",
        dark: "#007123"
      },
      ct_gray: {
        100: "#D6D6D6",
        200: "#B2B2B2",
        300: "#7E7E7E",
        400: "#4C4C4C"
      }
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))"
      },
      boxShadow: {
        ct_xs: "-1px 1px 1px 0 rgba(0, 0, 0, 0.05)",
        ct_sm:
          "-1px 1px 1px 0 rgba(0, 0, 0, 0.06), -1px 1px 2px 0 rgba(0, 0, 0, 0.1)",
        ct_md:
          "-4px 4px 3px 0 rgba(0, 0, 0, 0.06), -2px 2px 2px 0 rgba(0, 0, 0, 0.06)",
        ct_l: "-10px 10px 8px 0 rgba(0, 0, 0, 0.04), -4px 4px 3px 0 rgba(0, 0, 0, 0.1)",
        ct_xl:
          "-8px 8px 12px 0 rgba(0, 0, 0, 0.1), -3px 3px 6px 0 rgba(0, 0, 0, 0.15), 0px 0px 4px 0 rgba(0, 0, 0, 0.20)",
        ct_2xl:
          "1px -1px 20px 0 rgba(0, 0, 0, 0.15), -20px 20px 25px 0 rgba(0, 0, 0, 0.15)"
      },
      width: {
        ct_sm: "full",
        ct_md: "600px",
        ct_lg: "1024px"
      }
    }
  },
  daisyui: {
    themes: ["light", "dark", "cupcake"]
  },
  plugins: [require("daisyui")]
};
export default config;

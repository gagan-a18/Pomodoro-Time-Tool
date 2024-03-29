/** @type {import('tailwindcss').Config} */
import { nextui } from "@nextui-org/react";
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        red: {
          colors: {
            background: "#ba4949",
            foreground: "#FFFFFF",
          },
        },
        blue: {
          colors: {
            background: "#004d80",
            foreground: "#FFFFFF",
          },
        },
        green: {
          colors: {
            background: "#206020",
            foreground: "#FFFFFF",
          },
        },
      },
    }),
  ],
};

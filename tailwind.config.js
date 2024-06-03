const {nextui} = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        '128': '32rem', // 128 * 0.25rem = 32rem
        '144': '36rem', // 144 * 0.25rem = 36rem
      },
    },
  },
  variants: {
    extend: {
      margin: ['responsive'],
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};

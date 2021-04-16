const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  mode: 'jit',
  purge: ["./src/components/**/*.{js,ts,jsx,tsx}", "./src/layouts/**/*.{js,ts,jsx,tsx}", "./src/pages/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        print: { raw: "print" },
      },
      colors: {
        primary: {
          light: "#6EE7B7",
          DEFAULT: "#10B981",
          dark: "#047857",
        },
        secondary: {
          light: "#E25088",
          DEFAULT: "#B91048",
          dark: "#730027",
        },
        twitter: {
          DEFAULT: "#1DA1F2",
        },
        linkedin: {
          DEFAULT: "#0A66C2",
        },
        github: {
          DEFAULT: "#161B22",
        },
        stackoverflow: {
          DEFAULT: "#f48024",
        },
        telegram: {
          DEFAULT: "#179CDE",
        },
        pluralsight: {
          DEFAULT: "#EC008C",
        },
      },
      cursor: {
        help: "help",
      },
      fontFamily: {
        sans: ["Source Sans Pro", ...defaultTheme.fontFamily.sans],
        mono: ["JetBrains Mono", ...defaultTheme.fontFamily.mono],
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["even"],
    },
  },
  plugins: [],
};

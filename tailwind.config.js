/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    fontFamily: {
      serif: ["Merriweather", "serif"],
    },
    extend: {
      colors: {
        newYorkPink: "#ca786dff",
        graniteGray: "#646468ff",
        gunmetal: "#2a3038ff",
        whitish: "#fdfdfeff",
        raisinBlack: "#21212cff",
      },
      backgroundImage: {
        project: "url('../src/images/img-4.jpg')",
      },
      keyframes: {
        moveLeft: {
          "0%": { transform: "translateX(-100%)", opacity: 0.2 },
          "70%": { transform: "translateX(-50%)", opacity: 0.5 },
          "100%": { transform: "translateX(0%)", opacity: 1 },
        },
        moveRight: {
          "0%": { transform: "translateX(100%)", opacity: 0.2 },
          "70%": { transform: "translateX(50%)", opacity: 0.5 },
          "100%": { transform: "translateX(0%)", opacity: 1 },
        },
      },
      animation: {
        moveLeft: "moveLeft 2s",
        moveRight: "moveRight 2s",
      },
    },
  },
  plugins: [],
};

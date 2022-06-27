/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    fontFamily: {
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      colors: {
        newYorkPink: "#ca786dff",
        graniteGray: "#646468ff",
        gunmetal: "#2a3038ff",
        whitish: "#fdfdfeff",
        raisinBlack: "#21212cff",
      },
    },
  },
  plugins: [],
}

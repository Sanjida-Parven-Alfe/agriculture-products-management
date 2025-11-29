/** @type {import('tailwindcss').Config} */
module.exports = {

  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        agri: {
          olive: '#555424',
          brown: '#853D25',
          beige: '#fcfcfc',
          gray: '#CFCECA'
        },
        dark: {
          bg: '#1f2115',
          surface: '#2c3022',
          text: '#e2e8f0'
        }
      },
    },
  },
  plugins: [],
};
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#C6DE41',
        secondary: '#2D6E7E',
        tertiary: '#153B44',
        text: '#fff',
        background: '#071C21',
      }
    },
  },
  plugins: [],
}


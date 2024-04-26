/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#A79277',
        'secondary': '#D1BB9E',
        'third': '#FFF2E1',
        'forth': '#68400d',
      }
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "retro", "coffee", "luxury"],
  },
}


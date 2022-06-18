/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-pink': '#FF385C',
        'brand-white': 'FFF8F6',
        'brand-black': '#222222',
      }
    },
  },
  plugins: [],
}

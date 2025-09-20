/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // adjust based on your setup
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          green: "#16a34a",
          light: "#bbf7d0",
        },
      },
    },
  },
  plugins: [],
}

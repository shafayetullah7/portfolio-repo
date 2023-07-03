/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        dark1:'#363b3f',
        dark2:'#b5b5b5'
      },
      fontFamily:{
        abril: ['Abril Fatface', 'cursive'],
        bodoni: ['Bodoni Moda', 'serif']
      }
    },
  },
  plugins: [require("daisyui")],
}
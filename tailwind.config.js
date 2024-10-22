/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      width: {
        '1200' : '75rem'
      },

      height:{
        '1000' : '1000px'
      },
      colors: {
        grisfondo: '#eef3fb',
        azulfuerte: '#2c4776',
        verdeclaro : '#8fc0c3'
      },
    },
  },
  plugins: [],
}


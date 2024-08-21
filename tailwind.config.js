/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],

  theme: {
    extend: {
      colors: {
        gray: {
          50: '#08080880',
          30: '#08080840',
        },
        black: {
          75: '#3E3232BF',
          70: '#080808',
          50: '#080808BF'
        },
        white: {
          70: '#FFFFFF',
        },
        blue: {
          70: '#5A69F2', 
        },
      }, 
      backgroundImage: {
        "bg-img-1" : "url('/background.svg')"
      },

      screens: {
        xs: "30rem",
        "3xl": "40rem",
        "3xxl": "50.688rem",
        "3maxi": "58rem",
        "4xl": "68.25rem",
        "5xl": "73.375rem",
      },

    maxwidth:{
      "10xl": "1512px"
    }
    },
  },
  plugins: [],
}


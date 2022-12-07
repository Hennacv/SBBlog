/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      'white' :'#FFFFFF' ,
      'gray' : {
        50: '#FAFAFA',
        100: '#F4F4F4',
        300: '#d1d5db',
        700: '#404040',
        900: '#2B2B2B',
      },
      'indigo' : {
        500: '#6366f1',
      },
      'orange' : '#F27623'
    },
    extend: {
      fontFamily: {
        sans: ['var(--font-proxima)']
      },
    },
  },
  plugins: [],
};

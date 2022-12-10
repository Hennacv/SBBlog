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
        400: '#C5C5C5',
        500: '#868686',
        600: '#7d7d7d',
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
      boxShadow: {
        'bl': '0 0 10px 0 rgba(0, 0, 0, 0.1)',
      },
      fontSize: {
        xxs: ['12px', '15px'],
        xs: ['12px', '19px'],
        title: ['24px', '29px'],
      }
    },
  },
  plugins: [],
};

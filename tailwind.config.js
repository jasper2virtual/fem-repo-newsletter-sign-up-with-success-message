import daisyui from 'daisyui'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{vue,js}',
  ],
  theme: {
    extend: {
      screens: {
        mobile: '375px',
        tablet: '768px',
        desktop: '1440px',
      },
      colors: {
        app:{
          white: '#FFFFFF',
          grey:'#19182B',
          paleNavy:'#36384D',
          darkNavy:'#242742',
          vermellion:'#FF6155',
        }
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },

    },
  },
  plugins: [
    daisyui,
  ],
daisyui:{
  prefix:'daisy-',
}
}


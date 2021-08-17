const colors = require('tailwindcss/colors')

module.exports = {
  mode: '',
  theme: {
    extend: {
      colors: {
        sky: colors.sky,
        cyan: colors.cyan,
        black: '#0A1329',
        blue: '#315BC7 ',
        abang: '#F44336',
      },
      fontFamily: {
        rubik: ['Rubik', 'sans-serif'],
      },
      lineHeight: {
        custom: '10rem',
      },
    },
  },
  variants: {},
  plugins: [],
}

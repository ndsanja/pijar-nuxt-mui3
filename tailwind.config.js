const defaultTheme = require('tailwindcss/defaultTheme');

export default {
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', ...defaultTheme.fontFamily.sans],
      },
    },
  },
};

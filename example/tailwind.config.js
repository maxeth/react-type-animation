const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: [
    './pages/**/*.{js,ts,jsx,tsx,md,mdx}',
    './components/**/*.{js,ts,jsx,tsx,md,mdx}',
    './theme.config.tsx',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'dark-border': '#262626',
      },
      fontFamily: {
        // imported in _document.tsx
        poppins: ['Poppins', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  jit: true,

  variants: {
    extend: {},
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
import typography from '@tailwindcss/typography';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', 'system-ui', 'sans-serif'],
      },
      colors: {
        blue: {
          50: '#f0f7ff',
          100: '#e0efff',
          200: '#b9dfff',
          300: '#7cc4ff',
          400: '#36a9ff',
          500: '#0090ff',
          600: '#0070cc',
          700: '#005299',
          800: '#003666',
          900: '#001833',
        },
      },
      boxShadow: {
        'inner-lg': 'inset 0 2px 4px 0 rgb(0 0 0 / 0.05)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out forwards',
      },
    },
  },
  plugins: [
    typography,
    function({ addBase, theme }) {
      addBase({
        'html': { fontSize: '16px' },
        'body': {
          backgroundColor: theme('colors.gray.50'),
          color: theme('colors.gray.900'),
        },
      });
    },
  ],
};
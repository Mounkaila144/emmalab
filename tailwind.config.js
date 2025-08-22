/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Couleurs personnalisées Emma Lab
        'emma-blue': {
          50: '#e6f2ff',
          100: '#b3d9ff',
          200: '#80c0ff',
          300: '#4da7ff',
          400: '#1a8eff',
          500: '#095ac3', // Couleur principale
          600: '#084fa8',
          700: '#07448d',
          800: '#063972',
          900: '#052e57',
        },
        'emma-green': {
          50: '#e8f8e8',
          100: '#c2ebc2',
          200: '#9cde9c',
          300: '#76d176',
          400: '#50c450',
          500: '#1cb131', // Couleur principale
          600: '#189e2a',
          700: '#148b23',
          800: '#10781c',
          900: '#0c6515',
        },
      },
    },
  },
  plugins: [],
};

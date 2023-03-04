/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  mode: 'jit',
  darkMode: 'media',
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px'
    },
    fontFamily: {
      sans: ['Roboto'],
      'saira-condensed': ['Saira Condensed'],
      montserrat: ['Montserrat', 'sans-serif']
    },
    backgroundImage: {
      buildings: "url('./assets/buildings.svg')",
      'next-steps': "url('./assets/next-steps.svg')"
    },
    extend: {
      colors: {
        primary: '',
        secondary: 'rgba(8, 25, 55, 1)',
        gray: 'rgba(235, 231, 231, 0.44)',
        'gray-2': 'rgba(224, 224, 224, 0.61)',
        'gray-3': 'rgba(251, 246, 246, 0.5)',
        'light-blue': '#5072DA',
        orange: '#D38531',
        purple: '#843684',
        txtgray: '#E0E0E0',
        'listings-blur': 'rgba(66, 80, 105, 0.75)'
      }
    }
  },
  variants: {},
  plugins: []
};


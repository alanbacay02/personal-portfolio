/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'xs': '412px',
      // => @media (min-width: 412px) { ... }
      
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      colors: {
        // Light Mode Color Scheme
        'text': '#090401',
        'background': '#FFFCFA',
        'primary': '#159FF4',
        'secondary': '#D9D9D9',
        'accent': '#1E33D2',
        // Dark Mode Color Scheme
        'darkText': '#dcedfb',
        'darkBackground': '#0C1318',
        'darkPrimary': '#85b8f5',
        'darkSecondary': '#142637',
        'darkAccent': '#3A40E1'
       },
    },
  },
  plugins: [],
}


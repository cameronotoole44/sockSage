module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'press-start': ['"Press Start 2P"', 'cursive']
      },
      colors: {
        'violet-800': '#5A4E7C',
        'violet-700': '#6B5D92',
        'blue-500': '#4A90E2',
        'teal-400': '#4FD1C5',
        'gray-800': '#2D3748',
        'gray-700': '#4A5568',
        'gray-600': '#718096',
        'gray-200': '#EDF2F7',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        steel: '#888EB0',
        blackoc: '#0C0E16',
        white: '#FFFFFF',
        blueGray: '#7E88C3',
        black14: '#141625',
        black1e: '#1E2139 ',
        black25: '#252945',
        purple: '#7C5DFA',
        lightPurple: '#9277FF',
        lightGray: '#DFE3FA',
        red: '#EC5757',
        lightBg: '#F8F8FB',
        peach: '#FF9797',
      }
    },

    fontFamily:{
      spartan: ['League Spartan','sans-serif']
    }
  },
  plugins: [],
}

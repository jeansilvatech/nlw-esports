/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
    './index.html'
  ],
  theme: {
    fontFamily:{
      sans: ['Inter', 'sans-serif']
    },
    extend: {
      backgroundImage:{
        galaxy: "url('/Fundo.png')",
        'gradient': 'linear-gradient(to right, #1fa2ff, #12d8fa, #a6ffcb)',
        'game-gradient': 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000428 67.08%)',
        'gradientbg': 'linear-gradient(to bottom, #000428, #004e92)'
      }
    },
  },
  plugins: [],
}
// linear-gradient(to right, #2bc0e4, #eaecc6);
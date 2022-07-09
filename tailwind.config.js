/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    './components/**/*.{html,js}',
    './pages/**/*.{html,js}',
    './index.html',
  ],
  theme: {
    extend: {
      spacing: {
        '15' : '3.75rem'
      },
      borderWidth: {
        '1': '1px',
      },
      colors : {
        'proto': '#32445a'
      }
    },
  },
  plugins: [],
}

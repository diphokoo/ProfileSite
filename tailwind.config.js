/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        gold: '#C8A97E',
        'gold-light': '#E8C99E',
        'gold-dark': '#A8895E',
        dark: '#080808',
        'dark-2': '#0f0f0f',
        'dark-3': '#1a1a1a',
        'dark-4': '#242424',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Playfair Display', 'serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(200, 169, 126, 0.3)' },
          '100%': { boxShadow: '0 0 40px rgba(200, 169, 126, 0.7)' },
        },
      },
    },
  },
  plugins: [],
}

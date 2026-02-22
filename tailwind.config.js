/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        mint: {
          100: '#E0F7FA',
          300: '#80CBC4',
          500: '#26A69A',
          main: '#4DB6AC',
          dark: '#00796B'
        },
        gold: {
          100: '#FFF8E1',
          300: '#FFD54F',
          main: '#D4AF37',
        },
        neutral: {
          primary: '#1A2E2A',
          secondary: '#5C706B'
        }
      },
      fontFamily: {
        sans: ['Manrope', 'Inter', 'sans-serif'],
        display: ['Outfit', 'sans-serif'],
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.07)',
        'mint-glow': '0 10px 20px -10px rgba(38, 166, 154, 0.5)',
        'gold-glow': '0 0 20px rgba(212, 175, 55, 0.3)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'breathe': 'breathe_glow 4s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        breathe_glow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(128, 203, 196, 0.2)' },
          '50%': { boxShadow: '0 0 40px rgba(128, 203, 196, 0.5)' },
        }
      }
    }
  },
  plugins: [],
}

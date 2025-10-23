import type { Config } from 'tailwindcss'

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pink: {
          pastel: '#FFCFEF',
        },
        sky: {
          pastel: '#C6E6FF',
        },
        cream: {
          pastel: '#FFF6D6',
        },
        text: {
          primary: '#222222',
        },
      },
      fontFamily: {
        serifTitle: ['"DM Serif Display"', 'serif'],
        sansBody: ['"Inter"', '"Noto Sans KR"', 'sans-serif'],
        serif: ['"DM Serif Display"', 'serif'],
        sans: ['"Inter"', '"Noto Sans KR"', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in',
        'slide-up': 'slideUp 0.8s ease-out',
        'bounce-subtle': 'bounceSubtle 0.3s ease-in-out',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        bounceSubtle: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
} satisfies Config

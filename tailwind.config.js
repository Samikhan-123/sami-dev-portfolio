/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sapphire: {
          950: '#030711',
          900: '#080d1a',
          800: '#0e1629',
          700: '#1e293b',
          DEFAULT: '#0ea5e9', // Sapphire primary (Sky)
          glow: 'rgba(14, 165, 233, 0.4)',
        },
      },
      animation: {
        'beam': 'beam 5s linear infinite',
        'glow': 'glow 4s ease-in-out infinite',
      },
      keyframes: {
        beam: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(200%)' },
        },
        glow: {
          '0%, 100%': { opacity: 0.3, transform: 'scale(1)' },
          '50%': { opacity: 0.6, transform: 'scale(1.1)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#000000',
          50: '#050507',
          100: '#09090B',
          200: '#111115',
          300: '#1A1A22',
        },
        brand: {
          DEFAULT: '#DC2626', // Deep Rich Red (Orange/Light red removed)
          bright: '#EF4444',
          soft: '#B91C1C',
          glow: '#F87171',
        },
      },
      fontFamily: {
        display: ['"Plus Jakarta Sans"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'brand-sm': '0 2px 8px rgba(220, 38, 38, .2)',
        brand: '0 6px 20px rgba(220, 38, 38, .3)',
        'brand-lg': '0 12px 32px rgba(220, 38, 38, .35)',
        glass: '0 10px 30px rgba(0, 0, 0, .80)',
      },
    },
  },
  plugins: [],
};
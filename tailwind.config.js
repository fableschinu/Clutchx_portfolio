/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#000000', // Pure pitch black background
          50: '#050507',
          100: '#09090B',
          200: '#111115',
          300: '#1A1A22',
        },
        brand: {
          DEFAULT: '#EF4444',
          bright: '#F87171',
          soft: '#DC2626',
          glow: '#FCA5A5',
        },
      },
      fontFamily: {
        display: ['"Plus Jakarta Sans"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'brand-sm': '0 2px 8px rgba(239, 68, 68, .18)',
        brand: '0 6px 18px rgba(239, 68, 68, .22)',
        'brand-lg': '0 12px 28px rgba(239, 68, 68, .28)',
        'brand-bright': '0 4px 16px rgba(248, 113, 113, .16)',
        glass: '0 10px 30px rgba(0, 0, 0, .80)',
      },
    },
  },
  plugins: [],
};
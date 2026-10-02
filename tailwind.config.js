/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#09090B',
          50: '#0F1115',
          100: '#13161B',
          200: '#181C22',
          300: '#1E232B',
        },
        neon: {
          DEFAULT: '#2563EB',
          bright: '#3B82F6',
          soft: '#1D4ED8',
          glow: '#60A5FA',
        },
      },
      fontFamily: {
        display: ['"Plus Jakarta Sans"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'neon-sm': '0 2px 8px rgba(0,0,0,.18)',
        neon: '0 6px 18px rgba(0,0,0,.22)',
        'neon-lg': '0 12px 28px rgba(0,0,0,.28)',
        'neon-bright': '0 4px 16px rgba(0,0,0,.16)',
        glass: '0 10px 30px rgba(0,0,0,.30)',
      },
      backgroundImage: {
        'neon-gradient': 'linear-gradient(135deg, #2563EB 0%, #3B82F6 100%)',
        'neon-radial': 'radial-gradient(circle at center, rgba(37,99,235,.12) 0%, transparent 70%)',
        'grid-fade': 'linear-gradient(rgba(37,99,235,.035) 1px, transparent 1px), linear-gradient(90deg, rgba(37,99,235,.035) 1px, transparent 1px)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-18px)' },
        },
        'float-slow': {
          '0%, 100%': { transform: 'translateY(0px) translateX(0px)' },
          '50%': { transform: 'translateY(-24px) translateX(10px)' },
        },
        'glow-pulse': {
          '0%, 100%': { opacity: '0.5', filter: 'blur(60px)' },
          '50%': { opacity: '0.85', filter: 'blur(80px)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0)' },
        },
        'spin-slow': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'float-slow': 'float-slow 9s ease-in-out infinite',
        'glow-pulse': 'glow-pulse 5s ease-in-out infinite',
        marquee: 'marquee linear infinite',
        'marquee-reverse': 'marquee-reverse linear infinite',
        'spin-slow': 'spin-slow 24s linear infinite',
        shimmer: 'shimmer 3s linear infinite',
      },
    },
  },
  plugins: [],
};
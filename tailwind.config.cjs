/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Space Grotesk', 'Inter', 'sans-serif'],
        body: ['Inter', 'Inter var', 'system-ui'],
      },
      colors: {
        ink: '#0f172a',
        mist: '#94a3b8',
        glass: 'rgba(255,255,255,0.08)',
        'glass-dark': 'rgba(15,23,42,0.65)',
        neon: '#06b6d4',
        ember: '#f97316',
      },
      boxShadow: {
        'glass-light': '0 20px 60px rgba(15, 23, 42, 0.15)',
        'glass-dark': '0 20px 60px rgba(2, 6, 23, 0.7)',
      },
      animation: {
        float: 'float 8s ease-in-out infinite',
        orbit: 'orbit 18s linear infinite',
        glow: 'glow 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        orbit: {
          '0%': { transform: 'rotate(0deg) translateX(120px) rotate(0deg)' },
          '100%': { transform: 'rotate(360deg) translateX(120px) rotate(-360deg)' },
        },
        glow: {
          '0%, 100%': { boxShadow: '0 0 0 rgba(6, 182, 212, 0)' },
          '50%': { boxShadow: '0 0 35px rgba(6, 182, 212, 0.5)' },
        },
      },
    },
  },
  plugins: [],
};


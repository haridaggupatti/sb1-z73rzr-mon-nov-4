/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1a1b3f', // Dark navy background
          light: '#2a2b5f',
          dark: '#0f102f',
        },
        accent: {
          DEFAULT: '#3498ff', // Bright blue accent
          light: '#54a8ff',
          dark: '#2488ef',
        },
        secondary: {
          DEFAULT: '#6c63ff', // Purple accent
          light: '#8c83ff',
          dark: '#4c43df',
        },
      },
      animation: {
        'slide-up': 'slide-up 0.3s ease-out',
        'marquee': 'marquee 25s linear infinite',
      },
      keyframes: {
        'slide-up': {
          '0%': { transform: 'translateY(100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'marquee': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      backgroundImage: {
        'gradient-mesh': 'url("data:image/svg+xml,%3Csvg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath d="M0 0h100v100H0z" fill="%231a1b3f"/%3E%3C/svg%3E")',
      },
    },
  },
  plugins: [],
};
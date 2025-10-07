/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#6B5B4F',
          light: '#8B7766',
          dark: '#4A3F35',
        },
        secondary: {
          DEFAULT: '#9C8273',
          light: '#B59A8A',
          dark: '#7A6256',
        },
        accent: {
          wheat: '#D4B896',
          sand: '#C9B18C',
          coffee: '#5C4A42',
          cream: '#F5EDE4',
        },
        dark: {
          DEFAULT: '#2C2623',
          light: '#3D3530',
          lighter: '#4F4740',
        },
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
        display: ['Poppins', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-primary': 'linear-gradient(135deg, #6B5B4F 0%, #9C8273 100%)',
        'gradient-dark': 'linear-gradient(135deg, #2C2623 0%, #3D3530 100%)',
        'gradient-warm': 'linear-gradient(135deg, #D4B896 0%, #C9B18C 100%)',
      },
      boxShadow: {
        'warm': '0 4px 20px rgba(107, 91, 79, 0.15)',
        'warm-lg': '0 10px 40px rgba(107, 91, 79, 0.2)',
        'glass': '0 8px 32px 0 rgba(44, 38, 35, 0.1)',
        'glow': '0 0 30px rgba(156, 130, 115, 0.3)',
        'xl-colored': '0 20px 50px -12px rgba(107, 91, 79, 0.25)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'gradient': 'gradient 8s linear infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(2, 170, 176, 0.5)' },
          '100%': { boxShadow: '0 0 40px rgba(0, 205, 172, 0.8)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}

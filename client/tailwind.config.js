/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#08090B',
          900: '#0C0E12',
          850: '#111318',
          800: '#16181E',
          700: '#1E2128',
          600: '#282C35',
          500: '#3A3F4A',
        },
        mist: {
          100: '#F2F4F7',
          200: '#D8DDE5',
          300: '#AFB7C2',
          400: '#8A929E',
          500: '#6B727D',
        },
        accent: {
          DEFAULT: '#5EEAD4',
          soft: '#99F6E4',
          deep: '#14B8A6',
          alt: '#A78BFA',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      fontSize: {
        '5xl': ['3rem', { lineHeight: '1.08', letterSpacing: '-0.025em' }],
        '6xl': ['3.75rem', { lineHeight: '1.05', letterSpacing: '-0.03em' }],
        '7xl': ['4.5rem', { lineHeight: '1.02', letterSpacing: '-0.035em' }],
      },
      boxShadow: {
        card: '0 1px 2px rgba(0,0,0,.3), 0 8px 32px -12px rgba(0,0,0,.6)',
        lift: '0 20px 50px -20px rgba(0,0,0,.85)',
        ring: '0 0 0 1px rgba(94,234,212,.25), 0 0 40px -12px rgba(94,234,212,.35)',
      },
      animation: {
        'fade-up': 'fadeUp .7s cubic-bezier(.16,1,.3,1) both',
        marquee: 'marquee 34s linear infinite',
        blink: 'blink 1.15s steps(2, start) infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(18px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        blink: { '0%,100%': { opacity: '1' }, '50%': { opacity: '0' } },
      },
    },
  },
  plugins: [],
}

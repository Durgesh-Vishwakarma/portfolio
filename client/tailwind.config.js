/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Deep indigo base — each step is a real elevation level, not just a tint.
        base: {
          950: '#07060E',
          900: '#0B0A14',
          850: '#100E1B',
          800: '#14121F',
          750: '#1B1830',
          700: '#241F3D',
          650: '#2A2440',
          600: '#3A3358',
          500: '#4C4470',
        },
        ghost: {
          50: '#FBFAFF',
          100: '#EDEBF5',
          200: '#CFCBE0',
          300: '#9C97B3',
          400: '#7C7699',
          500: '#6E6890',
          600: '#544E70',
        },
        violet: {
          DEFAULT: '#6D5BFF',
          light: '#9B8CFF',
          soft: '#C3B9FF',
          deep: '#4A38D6',
        },
        magenta: '#C44BFF',
        amber: {
          DEFAULT: '#FFB86B',
          light: '#FFD3A3',
          deep: '#FF9F45',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      fontSize: {
        '5xl': ['3rem', { lineHeight: '1.06', letterSpacing: '-0.028em' }],
        '6xl': ['3.75rem', { lineHeight: '1.03', letterSpacing: '-0.032em' }],
        '7xl': ['4.75rem', { lineHeight: '1', letterSpacing: '-0.038em' }],
        '8xl': ['6rem', { lineHeight: '0.98', letterSpacing: '-0.042em' }],
      },
      boxShadow: {
        // Layered elevation — ambient + direct, like real light.
        e1: '0 1px 2px rgba(4,2,12,.5), 0 2px 8px -2px rgba(4,2,12,.4)',
        e2: '0 2px 4px rgba(4,2,12,.5), 0 12px 28px -8px rgba(4,2,12,.6)',
        e3: '0 4px 8px rgba(4,2,12,.55), 0 24px 60px -16px rgba(4,2,12,.75)',
        e4: '0 8px 16px rgba(4,2,12,.6), 0 40px 90px -24px rgba(4,2,12,.9)',
        'glow-violet': '0 0 0 1px rgba(109,91,255,.28), 0 12px 48px -12px rgba(109,91,255,.55)',
        'glow-amber': '0 0 0 1px rgba(255,184,107,.3), 0 12px 48px -12px rgba(255,184,107,.45)',
        inset: 'inset 0 1px 0 0 rgba(255,255,255,.07)',
      },
      backgroundImage: {
        'mesh-hero':
          'radial-gradient(60% 55% at 15% 0%, rgba(109,91,255,.30) 0%, transparent 60%), radial-gradient(50% 45% at 85% 15%, rgba(196,75,255,.20) 0%, transparent 60%), radial-gradient(45% 40% at 60% 95%, rgba(255,184,107,.13) 0%, transparent 60%)',
        'mesh-soft':
          'radial-gradient(45% 60% at 100% 0%, rgba(109,91,255,.16) 0%, transparent 65%), radial-gradient(40% 50% at 0% 100%, rgba(196,75,255,.11) 0%, transparent 65%)',
        'grad-violet': 'linear-gradient(135deg, #9B8CFF 0%, #6D5BFF 45%, #C44BFF 100%)',
        'grad-amber': 'linear-gradient(135deg, #FFD3A3 0%, #FFB86B 50%, #FF9F45 100%)',
        'grad-text': 'linear-gradient(120deg, #FBFAFF 8%, #C3B9FF 42%, #FFB86B 78%, #FBFAFF 96%)',
        'hairline': 'linear-gradient(90deg, transparent, rgba(155,140,255,.45), transparent)',
      },
      animation: {
        marquee: 'marquee 38s linear infinite',
        blink: 'blink 1.1s steps(2, start) infinite',
        'spin-slow': 'spin 22s linear infinite',
        drift: 'drift 18s ease-in-out infinite',
        'drift-rev': 'drift 22s ease-in-out infinite reverse',
        'shimmer-text': 'shimmerText 7s linear infinite',
        'pulse-ring': 'pulseRing 2.6s cubic-bezier(.4,0,.6,1) infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        blink: { '0%,100%': { opacity: '1' }, '50%': { opacity: '0' } },
        drift: {
          '0%,100%': { transform: 'translate3d(0,0,0) scale(1)' },
          '33%': { transform: 'translate3d(3%,-4%,0) scale(1.06)' },
          '66%': { transform: 'translate3d(-3%,3%,0) scale(.96)' },
        },
        shimmerText: {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '200% 50%' },
        },
        pulseRing: {
          '0%': { transform: 'scale(.9)', opacity: '.7' },
          '70%': { transform: 'scale(1.9)', opacity: '0' },
          '100%': { transform: 'scale(1.9)', opacity: '0' },
        },
      },
    },
  },
  plugins: [],
}

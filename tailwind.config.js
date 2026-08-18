/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts}'],
  theme: {
    extend: {
      animation: {
        heartbeat: 'heartbeat 1.6s ease-in-out infinite',
        grow: 'grow 0.3s ease-in-out',
        fade: 'fade 0.3s ease-in-out',
        'slide-up': 'slide-up 0.3s ease-out',
        'slide-down': 'slide-down 0.3s ease-out',
        'slide-in-right': 'slide-in-right 0.3s ease-out',
        'slide-in-left': 'slide-in-left 0.3s ease-out',
      },
      keyframes: {
        heartbeat: {
          '0%': { transform: 'scale(1)' },
          '14%': { transform: 'scale(1.08)' },
          '28%': { transform: 'scale(1)' },
          '42%': { transform: 'scale(1.12)' },
          '70%': { transform: 'scale(1)' },
        },
        grow: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.03)' },
        },
        fade: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slide-up': {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'slide-down': {
          '0%': { transform: 'translateY(-10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'slide-in-right': {
          '0%': { transform: 'translateX(10px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        'slide-in-left': {
          '0%': { transform: 'translateX(-10px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
      },
      screens: {
        md: '768px',
        lg: '1025px',
        xl: '1440px'
      },
      colors: {
        gold: '#af8f69',
        'gold-light': '#bf6f14',
        'gold-dark': '#8a6b4a',
        ink: '#2b2b2b',
        'ink-light': '#4a4a4a',
        'ink-lighter': '#6b6b6b',
        orange: '#bf6f14',
        cream: '#fffcf7',
        bodybg: '#fffefd',
        footer: '#2F2F2F',
        footerbar: '#262626',

        primary: '#af8f69',
        secondary: '#2b2b2b',
        success: '#7bdcb5',
        warning: '#fcb900',
        error: '#cf2e2e',
        info: '#0693e3',

        white: '#ffffff',
        black: '#000000',
      },
      fontFamily: {
        cairo: ['Cairo', 'sans-serif'],
        heebo: ['Heebo', 'sans-serif'],
        body: ['Cairo', 'sans-serif'],
        heading: ['Cairo', 'sans-serif']
      },
      fontSize: {
        '2xs': ['10px', { lineHeight: '1.5' }],
        '7xl': ['45px', { lineHeight: '1.5' }],
        '8xl': ['50px', { lineHeight: '1.5' }],
        '9xl': ['56px', { lineHeight: '1.5' }],
        '10xl': ['64px', { lineHeight: '1.5' }],
        '11xl': ['72px', { lineHeight: '1.3' }],
        '12xl': ['80px', { lineHeight: '1.3' }],
        'clamp-sm': ['clamp(12px, 2vw, 14px)', { lineHeight: '1.5' }],
        'clamp-base': ['clamp(14px, 2.5vw, 16px)', { lineHeight: '1.65' }],
        'clamp-lg': ['clamp(16px, 3vw, 18px)', { lineHeight: '1.5' }],
        'clamp-xl': ['clamp(18px, 3.5vw, 20px)', { lineHeight: '1.5' }],
        'clamp-2xl': ['clamp(20px, 4vw, 24px)', { lineHeight: '1.5' }],
        'clamp-3xl': ['clamp(24px, 4.5vw, 28px)', { lineHeight: '1.5' }],
        'clamp-4xl': ['clamp(28px, 5vw, 35px)', { lineHeight: '1.5' }],
        'clamp-5xl': ['clamp(35px, 6vw, 42px)', { lineHeight: '1.5' }],
        'clamp-6xl': ['clamp(40px, 6vw, 72px)', { lineHeight: '1.3' }],
      },
      maxWidth: {
        container: 'min(100%, 1280px)',
        content: 'min(100%, calc(100% - 40px * 2))',
      },
      borderRadius: {
        '4xl': '20px',
        '5xl': '24px',
        '6xl': '28px',
        '7xl': '40px',
      },
      boxShadow: {
        gold: '0 12px 20px rgba(41, 51, 61, 0.1)',
        whatsapp: '0 16px 24px 0 rgb(73 104 126 / 16%)',
        header: '0 10px 20px rgba(41, 51, 61, 0.1)',
        dropdown: '0px 0px 70px rgba(0, 0, 0, 0.35)',
        testimonial: '0 12px 30px rgba(0, 0, 0, 0.08)',
      },
      zIndex: {
        '10001': '10001',
      },
      borderWidth: {
        '3': '3px',
        '4': '4px',
        '8': '8px',
      },
    }
  },
  plugins: []
}

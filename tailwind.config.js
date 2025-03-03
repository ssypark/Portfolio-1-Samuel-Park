/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');

export default {
  content: ["./index.html", "./src/**/*.jsx"],
  theme: {
    extend: {
      colors: {
        olivewhite: '#F3F7F1',
        ink: '#24261B',
        sage: '#95ABAD',
        redwood: '#A84D1B',
        offwhite: '#F3F1EE',
        florange: '#FF5B03',
        sand: '#ab9778',
      },
      fontFamily: {
        syne: ['"Syne Mono"', 'sans-serif'],
        workSans: ['Work Sans', 'sans-serif'],
        tomarik: ['"tomarik-brush"', 'sans-serif'],
        ppObject: ['"PPObjectSans"', 'sans-serif'], 
      },
      borderWidth: {
        DEFAULT: '2px',
      },
      borderColor: {
        DEFAULT: '#24261B',
      },
      borderRadius: {
        DEFAULT: '8px',
      },
      fontSize: {
        hmax: ['clamp(3rem, 8vw, 6rem)', '1.2'],
        h1: ['clamp(2.5rem, 5vw, 3rem)', '1.2'], // 40px to 48px with 1.2 line-height
        h2: ['clamp(2rem, 4.5vw, 2.5rem)', '1.2'], // 32px to 40px
        h3: ['clamp(1.5rem, 4vw, 2rem)', '1.2'], // 24px to 32px
        h4: ['clamp(1.25rem, 3.5vw, 1.75rem)', '1.2'], // 20px to 28px
        h5: ['clamp(1rem, 3vw, 1.5rem)', '1.2'], // 16px to 24px
        h6: ['clamp(0.875rem, 2.5vw, 1.25rem)', '1.2'], // 14px to 20px
        body: ['clamp(1rem, 2.5vw, 1.125rem)', '1.6'], // 16px to 18px with 1.6 line-height
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-2deg)' },
          '50%': { transform: 'rotate(2deg)' },
        },
      },
      animation: {
        wiggle: 'wiggle 0.5s ease-in-out infinite',
      },
    },
  },
  plugins: [
    plugin(({ addUtilities }) => {
      addUtilities({
        '.bg-paper': {
          backgroundImage: "url('/src/assets/paper.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        },
        '.btn-default': {
          padding: '0.5rem 1rem', 
          backgroundColor: '#F3F7F1', 
          color: '#24261B', 
          fontFamily: '"Syne Mono", sans-serif', 
          fontSize: 'clamp(0.875rem, 2.5vw, 1.25rem)',
          fontWeight: 'bold',
          borderWidth: '2px', 
          borderColor: '#24261B',
          borderRadius: '8px', 
          position: 'relative',
          transition: 'background-color 0.3s ease-in-out', 
        },
        '.btn-default:hover': {
          backgroundColor: '#FF5B03', /* hover:bg-florange */
        },
      });
    }),
  ],
};
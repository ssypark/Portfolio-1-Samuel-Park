/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');

export default {
  content: ["./index.html", "./src/**/*.jsx"],
  theme: {
    extend: {
      colors: {
        olive: '#5F6B53',
        ink: '#24261B',
        sage: '#95ABAD',
        redwood: '#A84D1B',
        offwhite: '#F3F1EE',
        florange: '#FF5B03',
      },
      fontFamily: {
        syne: ['Syne', 'sans-serif'],
        workSans: ['Work Sans', 'sans-serif'],
      },
      fontSize: {
        h1: ['clamp(2.5rem, 5vw, 3rem)', '1.2'], // 40px to 48px with 1.2 line-height
        h2: ['clamp(2rem, 4.5vw, 2.5rem)', '1.2'], // 32px to 40px
        h3: ['clamp(1.5rem, 4vw, 2rem)', '1.2'], // 24px to 32px
        h4: ['clamp(1.25rem, 3.5vw, 1.75rem)', '1.2'], // 20px to 28px
        h5: ['clamp(1rem, 3vw, 1.5rem)', '1.2'], // 16px to 24px
        h6: ['clamp(0.875rem, 2.5vw, 1.25rem)', '1.2'], // 14px to 20px
        body: ['clamp(1rem, 2.5vw, 1.125rem)', '1.6'], // 16px to 18px with 1.6 line-height
      },
    },
  },
  plugins: [
    plugin(({ addUtilities }) => {
      addUtilities({
        '.bg-paper': {
          backgroundImage: "url('src/assets/paper.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        },
        '.bg-water': {
          backgroundImage: "url('src/assets/water.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        },
      });
    }),
  ],
};
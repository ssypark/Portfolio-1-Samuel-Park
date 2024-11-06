/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.jsx"],
  theme: {
    extend: {
      colors: {
        olive: '#5F6B53',
        ink: '#24261B',
        sage: '#95ABAD',
        offwhite: '#F3F1EE',
        florange: '#FF5B03',
      },
      fontFamily: {
        syne: ['Syne', 'sans-serif'],
        workSans: ['Work Sans', 'sans-serif'],
      },
      fontSize: {
        h1: '3rem',    // 48px
        h2: '2.5rem',  // 40px
        h3: '2rem',    // 32px
        h4: '1.75rem', // 28px
        h5: '1.5rem',  // 24px
        h6: '1.25rem', // 20px
      },
    },
  },
  plugins: [],
}


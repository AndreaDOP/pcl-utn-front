/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{html,js}",
    "./components/**/*.{html,js}",
  ],

  theme: {
    extend: {
      backgroundImage: {
        'custom-background-image':
          "url('https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1500w,f_auto,q_auto:best/newscms/2020_14/1554656/relaxing-products-today-main-200402.jpg')",
      },
      fontFamily: {
        DynaPuff: ['DynaPuff', 'cursive'],
        Montserrat: ['Montserrat Alternates', 'sans-serif'],
      },
      keyframes: {
        'slide-in-left': {
          '0%': { transform: 'translateX(-100%)', opacity: 0 },
          '100%': { transform: 'translateX(0)', opacity: 1 },
        },
        'slide-in-right': {
          '0%': { transform: 'translateX(100%)', opacity: 0 },
          '100%': { transform: 'translateX(0)', opacity: 1 },
        },
      },
      animation: {
        'slide-in-left': 'slide-in-left 1s ease-out',
        'slide-in-right': 'slide-in-right 1s ease-out',
      },
    }, // Cierre correcto del objeto extend
  },

  variants: {
    extend: {
      backgroundColor: ['hover'], // Habilitar las clases hover para cambiar el color de fondo
    },
  },

  plugins: [],
};

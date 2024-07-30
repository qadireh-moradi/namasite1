/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"], // Adjust to scan all subdirectories within src
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeOut: {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
        scale: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.5)' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 1s ease-in-out',
        fadeOut: 'fadeOut 1s ease-in-out',
        scale: 'scale 2s ease-in-out infinite',
      },
      fontSize: {
        '12px': '12px',
        '14px': '14px',
        '18px': '18px',
        '24px': '24px',
        '16px': '16px',
        '28px': '28px',
        '34px': '34px',
      },
      colors: {
        customGreen: {
          light: '#007048',
          DEFAULT: '#007048',
          dark: '#007048',
          art:'#00311F',
         
        },
        header:{
          light:'#EFEFEF'
        },
        formColor:{
          base:"#838383",
          hover:"#007048"
        },
        article:{
          base:"#F9F9F9"
        },
        seo:{
          base:"#EFEFEF"
        },
        sliderGray : '#D9D9D9',
        aboutGray : '#A3A3A3'
      },
    },
    backgroundImage: {
      herodefault: "url('https://www.namasite.ir/images/slider_bg.jpg')",
      
    },
  },
  plugins: [],
}
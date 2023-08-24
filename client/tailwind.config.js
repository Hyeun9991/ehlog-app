/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        oranienbaum: ['Oranienbaum', 'serif'],
        notoSansKR: ['Noto Sans KR', 'sans-serif'],
        suit: ['SUIT', 'sans-serif'],
      },
      colors: {
        bgColor: {
          light: '#ffffff',
          dark: '#000000',
        },
        textColor: {
          light: '#151515',
          dark: '#eeeeee',
        },
        primaryColor: '#556856',
        secondaryColor: '#bccdbf',
        borderColor: '#151515',
      },
    },
  },
  plugins: [],
};

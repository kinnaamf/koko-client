import flowbite from 'flowbite/plugin.js';

export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}',  './node_modules/flowbite/**/*.js'],
  darkMode: 'media',
  theme: {
    extend: {
      fontSize: {
        '12px': '12px',
        '13px': '13px',
        '120px' : '120px',
        '64px' : '64px'
      },
      width: {
        '60px' : '60px',
        '320' : '20rem',
        '540px' : '540px',
        '430px' : '430px',
        '600px' : '600px',
        '640px' : '640px',
        '720px' : '720px',
        '1200px' : '1200px',
        '1600px' : '1600px',
        '1920px' : '1920px',
        '1080px' : '1080px'
      },
      colors: {
        'marsh' : '#383434',
        'dark-marsh' : '#181414',
        'gray-marsh' : '#8C8C8C',
        'footer' : '#52525B',
        'footer-dark' : '#1A1A1A'
      },
      content: {
        'rightArrow' : 'url("src/assets/rightArrow.svg")'
      }
    },
  },
  variants: {
    extend: {},
  }
}
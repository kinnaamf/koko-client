module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'media',
  theme: {
    extend: {
      fontSize: {
        '13px': '13px'
      },
      width: {
        '320' : '20rem'
      },
      colors: {
        'marsh' : '#383434',
        'dark-marsh' : '#181414',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
  ],
}
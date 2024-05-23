module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'media',
  theme: {
    extend: {
      backgroundImage: {
        'amps' : "url('https://s3-alpha-sig.figma.com/img/6759/3926/344690fcb8d1fc319bdf77309b6ea27b?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dyNOYOWQNTQFquj~Vd6qI205K5ZKp1Q7xsKqAynVl31sUzqMs5i3GnogOSL9aKXRxo2thKW8NlduIoM~lRHUPLakmqJYGWjZTwCFdlp7Ialj1UIauFFx3~wM7w-TSdWTGCUVIDnN7lHS-ZUBe5lT4zFdv-c11Npa0NAx4EJwTvfH4GunXXRopnysS0PyIInUgEiYIK6O9WrMgfkafampSsEznGA-5PEuwosYaVWJvAcC~kp8aGHcQadr2jHD0rnnlCn7EUlpNhL48iSJpY~RXE9rKaprxkJn4qN4hTztg0pAl9wgVY1yr3KzFDS9PpLBWq0uySuFvz6T-Xh86y-wOg__')",
      },
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
        'footer-dark' : '  #1A1A1A;'
      },
      content: {
        'rightArrow' : 'url("src/assets/rightArrow.svg")'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
  ],
}
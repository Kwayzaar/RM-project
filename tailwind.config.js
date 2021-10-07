module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundColor: theme => ({
      ...theme('colors'),
      'rm-green': '#09F413'
    }),
    zIndex: {
      '9': 9
    },
    minHeight: {
      '1/4': '25%',
      '3/4': '75%'
    },
    container: {
      center: true,
    },
    extend: {
      backgroundImage: theme => ({
        'rm-background': "url('./img/RM-background.jpg')",
        // 'rm-landscape': "url('./img/RM-wallpaper-landscape.jpg')"
      }),
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

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
    fontFamily: {
      'red-hat': ['Red Hat Display', 'ui-sans-serif;']
    },
    // add new colors here to augment default palette
    extend: {
      backgroundImage: theme => ({
        'rm-background': "url('./img/RM-background.jpg')",
      }),
      textColor: theme => theme('colors'),
      textColor: {
      'rm-green': '#09F413'
    },
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

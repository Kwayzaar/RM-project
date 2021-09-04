module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true,
    },
    extend: {
      backgroundImage: theme => ({
        'rick-and-morty': "url('./img/RMWallpaper1.jpg')",
        'rm-landscape': "url('./img/RM-wallpaper-landscape.jpg')"
      }),
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

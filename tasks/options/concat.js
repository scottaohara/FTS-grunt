module.exports = {
  main: {
    src: ['src/assets/js/app.js'],
    dest: 'src/assets/js/app.min.js',
  },
  vendor: {
    src: ['src/assets/js/vendor/*.js'],
    dest: 'src/assets/js/vendor.concat.js',
  },
}
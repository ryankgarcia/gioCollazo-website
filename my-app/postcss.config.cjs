module.exports = {
  plugins: [
    require('postcss-import'),

    require('@csstools/postcss-global-data')({
      files: ['./src/styles/media.css'],
    }),

    require('postcss-custom-media')({
      preserve: false,
    }),

    require('autoprefixer'),
  ],
};

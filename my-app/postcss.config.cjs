// import postcssPresetEnv from 'postcss-preset-env';

// export default {
//   plugins: [
//     postcssPresetEnv({
//       stage: 1,
//       features: { 'custom-media-queries': true },
//       importFrom: {
//         customMedia: {
//           '--tablet': '(min-width: 600px)',
//           '--sm-desktop': '(min-width: 900px)',
//           '--desktop': '(min-width: 1200px)',
//           '--lg-desktop': '(min-width: 1536px)',
//         },
//       },
//     }),
//   ],
// };

module.exports = {
  plugins: [
    require('postcss-preset-env')({
      stage: 1,
      features: { 'custom-media-queries': true },

      importFrom: {
        customMedia: {
          '--tablet': '(min-width: 600px)',
          '--sm-desktop': '(min-width: 900px)',
          '--desktop': '(min-width: 1200px)',
          '--lg-desktop': '(min-width: 1536px)',
        },
      },
    }),
  ],
};

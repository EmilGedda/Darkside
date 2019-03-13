const path = require('path');
const TerserPlugin = require('terser-webpack-plugin')

module.exports = {
  entry: './dist/app.js',
  mode: 'development',
  devtool: 'source-map',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        parallel: true,
        terserOptions: {
          ecma: 6,
          output: {
            comments: false
          }
        },
        sourceMap: true,
      })
    ],
  },
};

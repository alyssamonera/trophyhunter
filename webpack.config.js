var path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: 'src/index',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js'
  },
  plugins: [ new UglifyJsPlugin({sourceMap: true}), ],
  module: {
    rules: [
      {
        use: ['style-loader', 'css-loader'],
      },
    ],
  }
};

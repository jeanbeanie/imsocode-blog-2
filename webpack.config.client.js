const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: [
    './client/index',
  ],
  target: 'web',

  resolve: {
    extensions: ['.js', '.jsx'],
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: 'babel-loader',
        include: [
          path.join(__dirname, 'client'),
          path.join(__dirname, 'common'),
          path.join(__dirname, 'src'),
        ],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
  ],
  output: {
    path: path.join(__dirname, 'client'),
    filename: 'client.js',
  },
};

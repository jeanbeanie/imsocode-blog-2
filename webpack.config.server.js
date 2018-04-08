const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: [
  //  'webpack/hot/poll?1000',
    './server/index',
  ],
  // watch: true,
  target: 'node',
  // externals: [nodeExternals({
  //  whitelist: ['webpack/hot/poll?1000'],
  // })],

  resolve: {
    extensions: ['.js', '.jsx'],
  },

  module: {
    rules: [{
      test: /\.jsx?$/,
      use: 'babel-loader',
      exclude: /node_modules/,
    }],
  },
  plugins: [
    // new StartServerPlugin('server.js'),
    new webpack.NamedModulesPlugin(),
    // new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
  ],
  output: {
    path: path.join(__dirname, 'server'),
    filename: 'app.js',
  },
};

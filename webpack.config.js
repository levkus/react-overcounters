var precss       = require('precss');
var autoprefixer = require('autoprefixer');

module.exports = {
  entry: [
    './src/index.js'
  ],
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        exclude: /node_modules/,
        loader: 'babel'
      },
      {
        test: /\.svg$/,
        loader: 'svg-inline'
      },
      {
          test: /\.css$/,
          loaders: [
              'style?sourceMap',
              'css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
              'postcss?sourceMap'
          ]
      }
    ]
  },
  postcss: function () {
    return [precss, autoprefixer];
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  }
};

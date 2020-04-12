const path = require('path')
const webpack = require('webpack')
const Dotenv = require('dotenv-webpack')

module.exports = {
  entry: {
    index: path.join(__dirname, '/public/app.js'),
  },
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, '/public/'),
    pathinfo: true,
    sourceMapFilename: '[name].js.map',
    publicPath: path.join(__dirname, '/src/main/webapp/'),
  },
  module: {
    rules: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.css$/, loader: 'style-loader!css-loader' },
      {
        test: /\.sass$/,
        loader: ['style-loader', 'css-loader', 'sass-loader'],
      },
      { test: /\.html$/, loader: 'raw-loader' },
      // inline base64 URLs for <=8k images, direct URLs for the rest
      { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192' },
      // helps to load bootstrap's css.
      {
        test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=10000&minetype=application/font-woff',
      },
      {
        test: /\.woff2$/,
        loader: 'url?limit=10000&minetype=application/font-woff',
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=10000&minetype=application/octet-stream',
      },
      { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file' },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=10000&minetype=image/svg+xml',
      },
    ],
  },
  plugins: [new webpack.HotModuleReplacementPlugin(), new Dotenv()],
  devServer: {
    publicPath: '/',
    contentBase: path.join(__dirname, '/public'),
    compress: true,
  },
  devtool: 'eval',
}

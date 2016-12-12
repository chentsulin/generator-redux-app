const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const autoprefixer = require('autoprefixer');
const simpleVars = require('postcss-simple-vars');
const nested = require('postcss-nested');


module.exports = {
  debug: true,
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'webpack-hot-middleware/client',
    'react-hot-loader/patch',
    './src/index',
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/',
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development'),
      },
    }),
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      inject: true,
    }),
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.json$/,
        loaders: ['json-loader'],
      },
      {
        test: /^((?!\.module).)*\.css$/,
        loaders: [
          'style-loader',
          'css-loader?sourceMap',
        ],
      },
      {
        test: /\.module\.css$/,
        loaders: [
          'style-loader',
          'css-loader?modules&sourceMap&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]', // eslint-disable-line max-len
          'postcss-loader',
        ],
      },
    ],
  },
  postcss: [
    autoprefixer({
      browsers: ['last 2 version', 'IE 10'],
    }),
    simpleVars,
    nested,
  ],
};

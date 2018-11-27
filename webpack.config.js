var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var entryPoint = path.resolve(__dirname, 'index.js');

module.exports = {
  entry: entryPoint,
  output: {
    path: path.resolve(__dirname, 'docs'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
      },
      {
        test: /\.html$/,
        loader: 'html-loader'
      },
      {
        test: /\.(css)$/,
        use: [
          'style-loader',
          'css-loader?importLoaders=2'
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)/,
        loader: 'file-loader'
      },
      {
        test: /\.(woff2?)$/,
        loader: 'file-loader'
      }

    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'React, React-router-dom simple boilerplate',
      template: 'index.html',
      filename: 'index.html'
    })
  ]
};

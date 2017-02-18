"use strict";

const webpack = require('webpack');

module.exports = {
  entry: './src/index',
  output: {
    path: __dirname + '/build',
    filename: 'app.bundle.js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel', // 'babel-loader' is also a legal name to reference
        query: {
          presets: ['react', 'es2015'],
          plugins: ['transform-runtime']
        }
      }
    ]
  }
};
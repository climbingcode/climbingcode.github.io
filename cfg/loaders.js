'use strict';

var path = require('path');
var srcPath = path.join(__dirname, '../src');
var node_modules_dir = path.resolve(__dirname, 'node_modules');

function loaders() {
  return {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel', // 'babel-loader' is also a legal name to reference
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.scss$/,
        include: /src/,
        loaders: [
          'style',
          'css',
          'sass?outputStyle=expanded'
        ]
      },
    ]
  };
}

module.exports = {
  srcPath: srcPath,
  publicPath: '/public/',
  clientLoaders: loaders
};
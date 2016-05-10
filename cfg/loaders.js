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
        loader: 'style!css!sass?sourceMap'
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        loader: 'file?name=public/fonts/[name].[ext]'
      },
      {
        test: /\.jpe?g$|\.gif$|\.png$/i,
        loader: "url-loader?limit=8192"
      },
      {
        test: /\.json$/,
        loader: "json"
      },
      {
        test: /\.wav$/,
        loader: "file-loader"
      }
    ]
  };
}

module.exports = {
  srcPath: srcPath,
  publicPath: '/public/',
  clientLoaders: loaders
};
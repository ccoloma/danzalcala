/*
  Generate style.min.css
  use: node compile.js
*/

var compressor = require('node-minify');

new compressor.minify({
  type: 'yui',
  fileIn: './less/style.css',
  fileOut: './less/style.min.css'
});


const path = require('path');

module.exports = {
  entry: './src/main.js',
  mode: 'development',
  output: {
    library: 'owlbearosds',
    path: path.resolve(__dirname, '../dist/owlbearosds'),
    libraryTarget: 'window'
  },
};
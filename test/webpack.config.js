const path = require('path');

module.exports = {
  mode: 'production',
  performance: false,
  entry: './test/treeshake/index.js',
  output: {
    path: path.resolve(__dirname, 'treeshake'),
    filename: 'index-webpack.bundle.js',
  },
};
const path = require('path');

module.exports = {
  module: {
    rules: [
      { test: /\.css$/, use: 'css-loader' },
      { test: /\.ts$/, use: 'ts-loader' },
      { test: /\.pdf$/, use: 'pdf-loader' },
    ]
  }
};

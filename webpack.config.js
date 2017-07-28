const path = require('path');

const APP_DIR = path.resolve(__dirname, 'js_assets/');

const config = {
  entry: './js_assets/main.jsx',
  output: {
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test : /\.jsx?/,
        include: APP_DIR,
        loader : 'babel-loader',
        query:
        {
          presets:['es2015', 'react']
        }
      },
    ]
  },
  resolve: {
    modules: [
      path.resolve('./js_assets'),
      'node_modules',
    ],
    extensions: ['.js', '.jsx'],
  },
};

module.exports = config;

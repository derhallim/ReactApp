var path = require('path');

module.exports = {
  entry: './src/app.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }, 
  module: {
      rules: [
        {
            test: /\.jsx?$/, 
            loader: 'babel-loader', 
            exclude: /node_modules/
        }, 
        {
            test: /\.css$/, 
            loader: ["style-loader", "css-loader"]
        }
      ]
  }
};
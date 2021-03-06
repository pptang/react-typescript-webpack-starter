var path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  // Change to your "entry-point".
  entry: './src/index',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist'
  },
  output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'app.bundle.js'
  },
  resolve: {
      extensions: ['.ts', '.tsx', '.js', '.json']
  },
  module: {
      rules: [{
          // Include ts, tsx, js, and jsx files.
          test: /\.(ts|js)x?$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
      }],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.ejs'
    })
  ]
};
var chalk = require('chalk');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var VueLoaderPlugin = require('vue-loader/lib/plugin');
var webpack = require('webpack');

if (process.env.NODE_ENV === 'development') {
  console.log(chalk.green('In development environment...'));
}
if (process.env.NODE_ENV === 'production') {
  console.log(chalk.green('In production environment...'));
}

module.exports = {
  entry: {
    app: ['./src/main.js'],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    publicPath: '',
  },
  module: {
    rules: [{
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: ['vue-style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ['vue-style-loader', 'css-loader']
      },
    ]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    },
    extensions: ['.js', '.vue']
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'index.html')
    }),
    new VueLoaderPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    hot: true
  }
}
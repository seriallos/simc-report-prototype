const path = require('path');
const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackInlineSourcePlugin = require('html-webpack-inline-source-plugin');

const PATHS = {
  BUILD: path.resolve(__dirname, 'build'),
  SRC: path.resolve(__dirname, 'src'),
  JS: path.resolve(__dirname, 'src/js'),
};

const NODE_ENV = process.env.NODE_ENV;

let simcData = '%%SIMC_DATA%%';

if (NODE_ENV === 'development') {
  simcData = JSON.stringify(require(path.join(PATHS.SRC, 'test.json')));
}

module.exports = {
  entry: path.join(PATHS.JS, 'app.js'),
  output: {
    path: PATHS.BUILD,
    filename: 'app.bundle.js',
  },
  resolve: {
    extensions: [
      '.js',
      '.jsx',
    ],
    alias: {
      js: PATHS.JS,
      assets: path.join(PATHS.SRC, 'assets'),
    },
  },
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
        ],
      }, {
        test: /\.(png|jpg|gif)$/,
        exclude: /node_modules/,
        use: {
          loader: 'url-loader',
        },
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'production'),
      },
    }),
    new HtmlWebpackPlugin({
      template: path.join(PATHS.SRC, 'index.html'),
      inlineSource: '.js$',
      simcData: simcData,
    }),
    new HtmlWebpackInlineSourcePlugin(),
  ],
  devServer: {
    contentBase: PATHS.SRC,

    // bind to any address, not just localhost
    host: '0.0.0.0',
  },
};

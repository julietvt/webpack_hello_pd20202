const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const { cleanWebpackPlugin } = require('clean-webpack-plugin');

const config = {
  mode: 'development',
  entry: './src/index.js',
  plugins: [
    new cleanWebpackPlugin(),
    new htmlWebpackPlugin({
      title: 'webpack test application',
      template: './src/index.html',
      meta: {
        viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no',
      },
    }),
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build'),
  },
  module: {
    rules: [
      {
        //test: /\.s(ca)ss/i,
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              modules: true,
            },
          },
        ],
      },
    ],
  },
};

module.exports = config;

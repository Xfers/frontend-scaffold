const merge = require('webpack-merge')
const baseConfig = require('./webpack.base')
require('dotenv').config()

const mode = process.env.MODE
const country = process.env.COUNTRY

const PUBLIC_PATH =
  mode == 'production'
    ? country == 'sg'
      ? 'https://d3r7nsslvs6aaf.cloudfront.net/frontend/' // SG Production
      : 'https://d2d9pm58ne9u5u.cloudfront.net/frontend/' // ID Production
    : 'https://dwlrc822bt02f.cloudfront.net/frontend/' // SG or ID Staging

const prodConfig = {
  output: {
    publicPath: PUBLIC_PATH,
    filename: '[name].[contenthash:8].' + process.env.COUNTRY + '.js',
    chunkFilename: '[name].[contenthash:8]' + process.env.COUNTRY + '.js',
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              publicPath: PUBLIC_PATH,
              postTransformPublicPath: p => {
                return `${p}`
              },
            },
          },
        ],
      },
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.scss$/i,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
            },
          },
          'sass-loader',
        ],
      },
      {
        test: /\.(css)$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  performance: {
    hints: 'error',
    maxAssetSize: 6815744, // 6.5mb
    maxEntrypointSize: 3145728, // 3mb
  },
}

module.exports = merge(baseConfig, prodConfig)

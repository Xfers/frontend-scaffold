const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin')
const MomentLocalesPlugin = require('moment-locales-webpack-plugin')
const ErrorOverlayPlugin = require('error-overlay-webpack-plugin')

module.exports = {
  entry: './src/index.tsx',
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    alias: {
      '~/common': path.resolve(__dirname, 'src/common'),
      '~/components': path.resolve(__dirname, 'src/components'),
      '~/routes': path.resolve(__dirname, 'src/routes'),
      '~/store': path.resolve(__dirname, 'src/store'),
      '~/assets': path.resolve(__dirname, 'src/assets'),
    },
  },
  plugins: [
    new MomentLocalesPlugin(),
    new HtmlWebPackPlugin({
      template: './src/index.html',
      favicon: './src/assets/favicon.ico',
    }),
    new FriendlyErrorsWebpackPlugin(),
    new CaseSensitivePathsPlugin(),
    new ErrorOverlayPlugin(),
  ],
  devServer: {
    host: 'localhost',
    disableHostCheck: true,
    historyApiFallback: true, // NOTE for react router
    https: false,
    quiet: true,
    overlay: false,
    open: true,
    hot: false,
  },
  devtool: 'inline-cheap-eval-source-map',
}

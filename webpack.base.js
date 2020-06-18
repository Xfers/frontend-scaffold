const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const UnusedWebpackPlugin = require('unused-webpack-plugin')
const DotenvPlugin = require('dotenv-webpack')
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const MomentLocalesPlugin = require('moment-locales-webpack-plugin')
const CompressionPlugin = require('compression-webpack-plugin')
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
      '~/legacy': path.resolve(__dirname, 'src/legacy'),
      '~/assets': path.resolve(__dirname, 'src/assets'),
    },
  },
  plugins: [
    new MomentLocalesPlugin(),
    new HtmlWebPackPlugin({
      template: './src/index.html',
      favicon: './src/assets/favicon.ico',
    }),
    new UnusedWebpackPlugin({
      directories: [path.join(__dirname, 'src')],
      exclude: ['*.test.*', '*.d.ts'],
      root: __dirname,
    }),
    new FriendlyErrorsWebpackPlugin({
      compilationSuccessInfo: {
        // should always be used with express server
        messages: ['xfers-dashboard is running at http://localhost:30001'],
      },
    }),
    new CaseSensitivePathsPlugin(),
    // new BundleAnalyzerPlugin(),
    new CompressionPlugin(),
    new DotenvPlugin({
      systemvars: true,
    }),
    new ErrorOverlayPlugin(),
  ],
  devServer: {
    host: '0.0.0.0',
    disableHostCheck: true,
    historyApiFallback: true, // NOTE for react router
    https: false,
    port: 30000,
    quiet: true,
    overlay: false,
    public: 'localhost:30001',
    open: true,
    hot: false,
  },
  devtool: 'inline-cheap-eval-source-map',
}

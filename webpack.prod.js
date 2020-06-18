const merge = require("webpack-merge");
const baseConfig = require("./webpack.base");

const prodConfig = {
  output: {
    publicPath: "/",
    filename: "[name].[contenthash:8].js",
    chunkFilename: "[name].[contenthash:8].js"
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: "file-loader"
          }
        ]
      },
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.scss$/i,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: true
            }
          },
          "sass-loader"
        ]
      },
      {
        test: /\.(css)$/i,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  performance: {
    hints: "error",
    maxAssetSize: 2115744, // 6.5mb
    maxEntrypointSize: 2145728 // 3mb
  }
};

module.exports = merge(baseConfig, prodConfig);

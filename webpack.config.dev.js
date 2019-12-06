const HTMLWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const base = require("./webpack.config.base");
const merge = require("webpack-merge");

module.exports = merge(base, {
  mode: "development",
  devtool: "source-map",
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    port: 3000
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        include: path.resolve(__dirname, "src")
      },
      {
        test: /\.scss$/,
        use: [
          "style-loader",
          "css-modules-typescript-loader",
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
              sourceMap: true,
              modules: {
                mode: "local",
                localIdentName: "[path][name]__[local]--[hash:base64:5]",
                context: path.resolve(__dirname, "src")
              }
            }
          },
          "postcss-loader",
          "sass-loader"
        ]
      },
      {
        enforce: "pre",
        test: /\.js$/,
        loader: "source-map-loader"
      },
      {
        test: /\.html$/,
        use: ["html-loader"]
      }
    ]
  },
  output: {
    path: path.join(__dirname, "dist"),
    filename: "main.js"
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: "./src/index.html",
      inject: true
    })
  ]
});

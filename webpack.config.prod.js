const HTMLWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const base = require("./webpack.config.base");
const merge = require("webpack-merge");
const path = require("path");

module.exports = merge(base, {
  mode: "production",
  output: {
    path: path.join(__dirname, "dist"),
    filename: "main.[contentHash].js"
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HTMLWebpackPlugin({
      template: "./src/index.html",
      inject: true
    }),
    new MiniCssExtractPlugin({
      filename: "[name].[hash].css"
    }),
    new OptimizeCSSAssetsPlugin({})
  ]
});

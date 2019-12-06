const HTMLWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
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
    new MiniCssExtractPlugin({ filename: "[name].[contentHash].css" }),
    new CleanWebpackPlugin()
  ],
  optimization: {
    minimizer: [
      new OptimizeCssAssetsPlugin(),
      new TerserPlugin(),
      new HTMLWebpackPlugin({
        template: "./src/index.html",
        inject: true,
        minify: {
          removeAttributeQuotes: true,
          collapseWhitespace: true,
          removeComments: true
        }
      })
    ]
  }
});

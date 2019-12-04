const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const UglifyJSPlugin = require("uglifyjs-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

module.exports = {
  entry: "./src/index.tsx",
  mode: "production",
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },
  output: {
    path: path.join(__dirname, "dist"),
    filename: "main.[contentHash].js"
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
        use: ["css-loader", "postcss-loader", "sass-loader"]
      },
      {
        enforce: "pre",
        test: /\.js$/,
        loader: "source-map-loader"
      }
    ]
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
    new OptimizeCSSAssetsPlugin({}),
    new UglifyJSPlugin()
  ]
};

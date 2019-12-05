const HTMLWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const base = require("./webpack.config.base");
const merge = require("webpack-merge");

module.exports = merge(base, {
  mode: "development",
  devtool: "source-map",
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

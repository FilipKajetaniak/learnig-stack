const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: "./src/index.tsx",
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
      }
    ]
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: "./src/index.html",
      inject: true
    }),
    new CleanWebpackPlugin()
  ]
};

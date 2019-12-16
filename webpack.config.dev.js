const HTMLWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const merge = require("webpack-merge");
const base = require("./webpack.config.base");

module.exports = merge(base, {
  mode: "development",
  devtool: "source-map",
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    port: 3000,
    historyApiFallback: true
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        include: path.resolve(__dirname, "src")
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          "style-loader",
          {
            loader: "typings-for-css-modules-loader",
            options: {
              modules: true,
              namedExport: true,
              camelCase: true
            }
          },
          "postcss-loader",
          "sass-loader"
        ],
        include: /\.module\.(sa|sc|c)ss$/
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: ["style-loader", "css-loader", "postcss-loader", "sass-loader"],
        exclude: /\.module\.(sa|sc|c)ss$/
      },
      {
        test: /\.(ogg|mp3|wav|mpe?g)$/i,
        loader: "file-loader",
        options: {
          name: "[name].[ext]"
        }
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
  plugins: [
    new HTMLWebpackPlugin({
      template: "./src/index.html",
      inject: true
    })
  ]
});

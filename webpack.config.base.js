const path = require("path");

const createAliases = folders =>
  folders.reduce(
    (aliases, currentAlias) => ({
      ...aliases,
      [currentAlias]: path.resolve(__dirname, `./src/${currentAlias}`)
    }),
    {}
  );

module.exports = {
  entry: "./src/index.tsx",
  output: {
    path: path.join(__dirname, "dist"),
    filename: "main.[contentHash].js",
    publicPath: "/"
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
    alias: createAliases(["components", "store", "views", "utils"])
  }
};

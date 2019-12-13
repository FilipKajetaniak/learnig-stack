const path = require("path");
const { readdirSync } = require("fs");

// Read all directories inside ./src and create
// object with aliases pointing to these directories
const createAliases = () =>
  readdirSync("./src", { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name)
    .reduce(
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

const path = require(path);

module.exports = {
  entry: "src/index.ts",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js "
  },
  module: {},
  plugins: []
};

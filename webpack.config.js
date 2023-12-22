const path = require("node:path");

module.exports = {
  mode: "production",
  entry: path.resolve(__dirname, "src/game.js"),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
};
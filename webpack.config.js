const path = require('path');

module.exports = {
  mode: "development",
  entry: path.resolve(__dirname, "src/game.js"),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
};
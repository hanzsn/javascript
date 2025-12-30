const path = require("path");

module.exports = {
  entry: {
    calculator: "./projects/calculator/calculator.js",
    rps: "./projects/RPS/rps.js",
    etch_a_sketch: "./projects/etch-a-sketch/EtchASketch.js",
    library: "./projects/library/library.js",
    restaurant: "./projects/restaurantPage/index.js",
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  mode: "production",
};

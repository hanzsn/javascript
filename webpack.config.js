const path = require("path");

module.exports = {
  entry: {
    calculator: "./repositories/projects/calculator/calculator.js",
    rps: "./repositories/projects/RPS/rps.js",
    etch_a_sketch: "./repositories/projects/etch-a-sketch/EtchASketch.js",
    library: "./repositories/projects/library/library.js",
    restaurant: "./repositories/projects/restaurantPage/index.js",
    todoList: "./repositories/projects/todoList/ui.js",
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "./repositories/dist"),
    clean: true,
  },
  mode: "production",
};

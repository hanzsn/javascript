const container = document.querySelector(".container");

function createGrids() {
  for (let i = 0; i < 16 * 16; i++) {
    const squares = document.createElement("div");
    squares.className = "border";
    container.appendChild(squares);

    squares.addEventListener("mouseenter", function (e) {
      e.target.style.background = "#597445";
    });
  }
}

createGrids();

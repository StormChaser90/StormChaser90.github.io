// create variable to store container
const container = document.getElementById("container");
// create a div and make a square
function makeRows(rows, cols) {
  container.style.setProperty("--grid-rows", rows);
  container.style.setProperty("--grid-cols", cols);
  for (c = 0; c < rows * cols; c++) {
    let cell = document.createElement("div");
    container.appendChild(cell).className = "grid-item";
  }
}
// hover effect when mousing over squares

makeRows(16, 16);

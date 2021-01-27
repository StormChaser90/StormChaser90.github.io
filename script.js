// variable for current mouse position
let currentlyActive = false;
let currentColor = [];
let cell = [];

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

// Slider
let slider = document.getElementById("myRange");
let output = document.getElementById("demo");
output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
function gridValue() {
  let userInput = document.getElementById("myRange").value;
  document.getElementById("demo").innerHTML = userInput;
  console.log(slider.value);
}

// Link slider value to grid
makeRows(16, 16);

// console.log(demo);

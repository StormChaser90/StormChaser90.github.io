// variable for current mouse position
let currentlyActive = false;
let currentColor = [];
let cell = [];

// create variable to store container
const container = document.getElementById("container");

// Slider
// let slider = document.getElementById("sliderRange");
// let output = document.getElementById("demo");
// output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value
function updateGrid() {
  let userInput = document.getElementById("sliderRange").value;
  document.getElementById("demo").innerHTML = userInput;
  container.style.gridTemplateColumns = `repeat(${userInput}, 1fr`;
  container.style.gridTemplateRows = `repeat(${userInput}, 1fr`;
  let allCells = userInput * userInput;
  for (c = 0; c < allCells; c++) {
    let cell = document.createElement("div");
    container.appendChild(cell).className = "grid-item";
  }
}

// button change to reset after each click
function btnClick() {
  let change = document.getElementById("gridBtn");
  if (change.innerHTML == "Set") {
    change.innerHTML = "Reset";
  } else {
    change.innerHTML = "Set";
  }
}

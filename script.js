// variable for current mouse position
// let currentlyActive = false;
// let currentColor = [];
// let cell = [];

// create variable to store container
const container = document.getElementById("container");
//
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

// button changes to reset after each click
function btnClick() {
  let change = document.getElementById("gridBtn");
  if (change.innerHTML == "Reset") {
    change.innerHTML = "Set";
    resetGrid();
  } else {
    change.innerHTML = "Reset";
    disableSlider();
  }
}

// Function to reset grid //
function resetGrid() {
  window.location.reload(true);
}

// Display slider position //
let slider = document.getElementById("sliderRange");
let output = document.getElementById("demo");
slider.oninput = function () {
  output.innerHTML = this.value;
};

// Disable slider use until reset
function disableSlider() {
  document.getElementById("sliderRange").disabled = true;
  document.addEventListener("click", function hiddenSlider() {
    slider.style.opacity = ".2";
  });
}

// function to log colorpicker value // Currently works as input color only
// colorBtn.addEventListener("click", colorChoice);
// container.addEventListener("mouseover", function (e) {
//   e.target.style.backgroundColor = "blue";
// });

// function colorChoice() {
//   console.log(colorPicker.value);
// }

// colorBtn.addEventListener("click", colorChoice);
// container.addEventListener("mouseover", function (e) {
//   e.target.style.backgroundColor = "blue";
// });

// function colorChoice(e) {
//   console.log(colorPicker.value);
// }

let colorPickerEl = document.getElementById("colorPicker");
colorPickerEl.addEventListener("click", colorPickerOnChange);

function colorPickerOnChange(e) {
  let color = e.target.value;
  // console.log(color);
  addColorDiv(color);
}

function addColorDiv(color) {
  container.addEventListener("mouseover", function (e) {
    e.target.style.backgroundColor = color;
  });
}

// function to apply colorpicker value to grid //
// let userColor = document.querySelector("colorPicker");

// function draw() {
//   document.getElementsByClassName(
//     "grid-item"
//   ).style.backgroundColor = colorPicker.value;
// }

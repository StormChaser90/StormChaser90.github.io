// variable for current mouse position
// let currentlyActive = false;
// let currentColor = [];
// let cell = [];

// create variable to store container
const container = document.getElementById("container");

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
    document.addEventListener("click", hiddenSlider());
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
}

function hiddenSlider() {
  slider.style.opacity = ".2";
}

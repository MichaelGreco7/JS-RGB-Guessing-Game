// Make a list of random colors
var colors = generateRandomColors(6);

// Select all six squares and loop through them
// and then assign one of those colors to each background

// Select each one
var squares = document.querySelectorAll(".square");
// Select Random Color
var pickedColor = pickColor();
// Select RGB Span
var colorDisplay = document.getElementById("colorDisplay");
// Select message span
var messageDisplay = document.querySelector("#message");

// Update color display to show color we picked
colorDisplay.textContent = pickedColor;

// Loop through each one
for (var i = 0; i < squares.length; i++) {
  // Add intital colors to sqaures
  squares[i].style.backgroundColor = colors[i];

  // Add click listeners to squres
  squares[i].addEventListener("click", function() {
    // Grab color of clicked square
    var clickedColor = this.style.backgroundColor;
    // Compare color to pickedColor
    if (clickedColor === pickedColor) {
      messageDisplay.textContent = "Correct!";
      changeColors(clickedColor);
    } else {
      // Fade out square if you picked wrong color
      this.style.backgroundColor = "#232323";
      messageDisplay.textContent = "Try Again!";
    }
  });
}

// Change all sqaures to correct color when correct
function changeColors(color) {
  // Loop through all squares
  for (var i = 0; i < color.length; i++) {
    // Change each color to match given color
    squares[i].style.backgroundColor = color;
  }
}

// Create function to pick random color
function pickColor() {
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

// Create function to generate a list of random colors
function generateRandomColors(num) {
  // Make an array
  var arr = [];
  // Repeat num times
  for (var i = 0; i < num; i++) {
    arr.push(randomColor());
    // Get random color and push into array
  }
  // return that array
  return arr;
}

function randomColor() {
  // Pick a "red" from 0 - 255
  var r = Math.floor(Math.random() * 256);
  // Pick a "green" from 0 - 255
  var g = Math.floor(Math.random() * 256);
  // Pick a "blue" from 0 - 255
  var b = Math.floor(Math.random() * 256);
  return "rgb(" + r + "," + g + "," + b + ")";
}

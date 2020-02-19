// Make a list of colors
var colors = [
  "rgb(255, 0, 0)",
  "rgb(255, 255, 0)",
  "rgb(0, 255, 0)",
  "rgb(0, 255, 255)",
  "rgb(0, 0, 255)",
  "rgb(255, 0, 255)"
];

// Select all six squares and loop through them
// and then assign one of those colors to each background

// Select each one
var squares = document.querySelectorAll(".square");
// Select Scion
var pickedColor = colors[3];
// Select Span
var colorDisplay = document.getElementById("colorDisplay");

// Update color display to show color we picked
colorDisplay.textContent = pickedColor;

// Loop through each one
for (var i = 0; i < squares.length; i++) {
  // Add intital colors to sqaures
  squares[i].style.backgroundColor = colors[i];

  // Add click listeners to squres
  squares[i].addEventListener("click", function() {
    alert("Clicked A Square");
  });
}

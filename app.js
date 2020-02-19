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
// Loop through each one
for (var i = 0; i < squares.length; i++) {
  squares[i].style.backgroundColor = colors[i];
}

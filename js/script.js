const container = document.getElementById("main-content");

function eightSquares() {
  for (i = 0; i < 64; i++) {
    const squareDiv = document.createElement("div");
    squareDiv.classList.add('squareDiv');
    // squareDiv.id = "individual-square"
    container.appendChild(squareDiv);
  }
}

function sixteenSquares() {
  for (i = 0; i < 256; i++) {
    const squareDiv = document.createElement("div");
    squareDiv.classList.add('squareDiv');
    // squareDiv.id = "individual-square"
    container.appendChild(squareDiv);
  }
}
sixteenSquares();


function paintBlue() {
  let individualSquare = document.querySelectorAll(".squareDiv");
  for (let j = 0; j < individualSquare.length; j++) {
    individualSquare[j].addEventListener("mouseover", function paint() {
      individualSquare[j].style.backgroundColor = "blue";
    });
  }
}

paintBlue();
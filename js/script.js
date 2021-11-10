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
  paintBlack();
}

sixteenSquares();

let gridSizeButton = document.getElementById("grid-size-button").addEventListener("click", chooseGrid);

//Allow the user to choose the desired grid to draw
function chooseGrid() {
  let userChose = prompt("Choose a number between 8, 16, 32 and 64");
  if (userChose == 8) {
    eightSquares();
  } else if (userChose == 16) {
    sixteenSquares();
  } else if (userChose == 32) {
    console.log("You chose the right grid");
  } else if (userChose == 64) {
    console.log("You chose the right grid");
  } else if (userChose != 8, 16, 32, 64)
    alert("Please, choose a valid grid!")

}

//function to paint black squares
function paintBlack() {
  let individualSquare = document.querySelectorAll(".squareDiv");
  for (let j = 0; j < individualSquare.length; j++) {
    individualSquare[j].addEventListener("mouseover", function paint() {
      individualSquare[j].style.backgroundColor = "#000000";
    });
  }
}


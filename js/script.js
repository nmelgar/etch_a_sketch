const container = document.getElementById("main-content");

let userChose = prompt("Choose a number between 8, 16, 32 and 64");
const gridCounter = userChose * userChose;

function sixteenSquares() {
  for (i = 0; i < gridCounter; i++) {
    //create the square
    const squareDiv = document.createElement("div");
    //add the clase "squareDiv" to the square
    squareDiv.classList.add('squareDiv');
    //create the width and height of each square
    //using the max size of the width container/the desired #of squares
    squareDiv.style.width = 480 / userChose + "px";
    squareDiv.style.height = 480 / userChose + "px";
    //create the columns based on the amount of squares
    container.style.setProperty('grid-template-columns', 'repeat(' + userChose + ', 1fr)');
    //add the square to the "main-content" element
    container.appendChild(squareDiv);
  }
  paintBlack();
}

sixteenSquares();

let gridSizeButton = document.getElementById("grid-size-button").addEventListener("click", chooseGrid);


//function to paint black squares
function paintBlack() {
  let individualSquare = document.querySelectorAll(".squareDiv");
  for (let j = 0; j < individualSquare.length; j++) {
    individualSquare[j].addEventListener("mouseover", function paint() {
      individualSquare[j].style.backgroundColor = "#000000";
    });
  }
}
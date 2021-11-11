const container = document.getElementById("main-content");

//number of rows == number of columns
//user introduces number of rows

let userChose = prompt("Choose a number between 8, 16, 32 and 64");
const gridCounter = userChose * userChose;

function sixteenSquares() {
  for (i = 0; i < gridCounter; i++) {
    const squareDiv = document.createElement("div");
    squareDiv.classList.add('squareDiv');
    // squareDiv.id = "individual-square"
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


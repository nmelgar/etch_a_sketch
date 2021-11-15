const container = document.getElementById("main-content");

let userChose = prompt("Choose a number smaller than 64 ");

//add a function to avoid user to choose a number langer than 64


const gridCounter = userChose * userChose;

function createSquares() {
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

createSquares();


//function to paint black squares

let paintBlackButton = document.getElementById("paint-black-button").addEventListener("click", paintBlack);

function paintBlack() {
  let individualSquare = document.querySelectorAll(".squareDiv");
  for (let j = 0; j < individualSquare.length; j++) {
    individualSquare[j].addEventListener("mouseover", function paint() {
      individualSquare[j].style.backgroundColor = "#000000";
    });
  }
}

//function to paint squares with random colors
let paintColorButton = document.getElementById("color-style-button").addEventListener("click", paintColor);

function paintColor() {
  let individualSquare = document.querySelectorAll(".squareDiv");
  for (let c = 0; c < individualSquare.length; c++) {
    individualSquare[c].addEventListener("mouseover", function paintWithColors() {
      let colorRed = Math.floor(Math.random() * 256);
      let colorGreen = Math.floor(Math.random() * 256);
      let colorBlue = Math.floor(Math.random() * 256);
      individualSquare[c].style.backgroundColor = 'rgb(' + colorRed + ', ' + colorGreen + ', ' + colorBlue + ')';
    });
  }

}

//to erase the colored parts
let eraseColorButton = document.getElementById("eraser-button").addEventListener("click", erasePaint);

function erasePaint() {
  let individualSquare = document.querySelectorAll(".squareDiv");
  for (let e = 0; e < individualSquare.length; e++) {
    individualSquare[e].addEventListener("mouseover", function eraseColor() {
      individualSquare[e].style.backgroundColor = "#E1E1E1";
    });
  }
}


//to reload and restart the site
let restartButton = document.getElementById("restart-button").addEventListener("click", reloadPage);

function reloadPage() {
  window.location.reload();
}
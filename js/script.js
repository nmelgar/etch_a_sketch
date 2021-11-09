const container = document.getElementById("main-content");

function eightSquares() {
    for (i = 0; i < 256; i++) {
        const squareDiv = document.createElement("div");
        squareDiv.classList.add('squareDiv');
        container.appendChild(squareDiv);
    }
}

eightSquares();
const GRIDSIDE = 600;
let rows = 16;
let cols = 16;
const sliderContainer = document.querySelector("#slide-container") ;
const slider = document.querySelector("#slider")
const sliderValue = document.querySelector("#sliderValue")

let squaresPerSide = 16;
sliderValue.textContent = `${squaresPerSide} x ${squaresPerSide} (resolution)`;




    const board = document.querySelector("#board")
    board.style.width = board.style.height - `${GRIDSIDE}`
    




function setBackgroundColor() {
    this.style.backgroundColor = "purple";
}

function createGridCells(squaresPerSide) {
    const numOfSquares = (squaresPerSide * squaresPerSide);
    const widthOrHeight = `${(GRIDSIDE / squaresPerSide) - 2}px`;

    for (let i = 0; i < numOfSquares; i++ ) {
        const gridCell = document.createElement("div");

        gridCell.style.width = gridCell.style.height = widthOrHeight;
        gridCell.classList.add("cell");

        board.appendChild(gridCell);

        gridCell.addEventListener("mouseover", setBackgroundColor)
    }
}

createGridCells(squaresPerSide)

function removeGridCells() {
    while (board.firstChild) {
        board.removeChild(board, firstChild);
    }

}

createGridCells(16)
let currentPlayer = "X";
let gameBoard = ["", "", "", "", "", "", "", "", ""];
let gameActive = true;

const winningCombinations = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8], 
  [0, 3, 6], [1, 4, 7], [2, 5, 8], 
  [0, 4, 8], [2, 4, 6] 
];

function placeMarker(cellIndex) {
  if (gameBoard[cellIndex] === "" && gameActive) {
    gameBoard[cellIndex] = currentPlayer;
    document.getElementById("gameBoard").children[cellIndex].innerHTML = currentPlayer;
    
    if (checkWin()) {
      document.getElementById("winner").innerHTML = `${currentPlayer} wins!`;
      gameActive = false;
    } else if (checkDraw()) {
      document.getElementById("winner").innerHTML = "It's a draw!";
      gameActive = false;
    } else {
      currentPlayer = currentPlayer === "X" ? "O" : "X";
    }
  }
}

function checkWin() {
  return winningCombinations.some(combination => {
    return combination.every(index => {
      return gameBoard[index] === currentPlayer;
    });
  });
}

function checkDraw() {
  return gameBoard.every(cell => cell !== "");
}

function restartGame() {
  currentPlayer = "X";
  gameBoard = ["", "", "", "", "", "", "", "", ""];
  gameActive = true;
  document.getElementById("winner").innerHTML = "";
  Array.from(document.getElementById("gameBoard").children).forEach(cell => {
    cell.innerHTML = "";
  });
}

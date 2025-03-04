const cells = document.querySelectorAll(".cell");
const status = document.querySelector(".status");
const reset = document.querySelector(".reset");

let isX = true;
let gameOver = false;

cells.forEach((cell) => {
  cell.addEventListener("click", () => {
    if (!cell.textContent && !gameOver) {
      toggleMark(cell);
      win();
      toggleStatus();
    }
  });
});

function resett() {
  cells.forEach((cell) => {
    cell.textContent = "";
  });
  status.textContent = "X turn";
  isX = true;
  gameOver = false;
}

reset.addEventListener("click", () => {
  resett();
});

function toggleMark(cell) {
  if (isX) {
    addXMark(cell);
  } else {
    addOMark(cell);
  }
}

function toggleStatus() {
  status.textContent = isX ? "O turn" : "X turn";
  isX = !isX;
}

function addXMark(cell) {
  cell.textContent = "X";
}

function addOMark(cell) {
  cell.textContent = "O";
}

function win() {
  const cellsArray = Array.from(document.querySelectorAll(".cell"));
  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let combination of winningCombinations) {
    const [a, b, c] = combination;
    const cellA = cellsArray[a].textContent.trim();
    const cellB = cellsArray[b].textContent.trim();
    const cellC = cellsArray[c].textContent.trim();

    if (cellA !== "" && cellA === cellB && cellB === cellC) {
      gameOver = true;
      setTimeout(() => {
        alert(`Player ${cellA} Won`);
        resett();
      }, 100);
      return;
    }
  }

  if (cellsArray.every((cell) => cell.textContent.trim() !== "")) {
    gameOver = true;
    setTimeout(() => {
      alert("Draw!");
      resett();
    }, 100);
  }
}

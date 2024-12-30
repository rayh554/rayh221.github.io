const grid = document.getElementById('grid');
const restartButton = document.getElementById('restartButton');
let currentPlayer = 'X';
let moves = 0;
let gameOver = false;
let cells;

restartButton.addEventListener('click', restartGame);

function createGrid() {
    grid.innerHTML = '';

    cells = [];

    for (let i = 0; i < 9; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.id = `cell-${i}`;
        grid.appendChild(cell);
        cells.push(cell);
    }

    cells.forEach(cell => {
        cell.addEventListener('click', handleClick);
    });
}

function handleClick() {
    if (!gameOver && !this.textContent) {
        this.textContent = currentPlayer;
        moves++;
        if (checkWin()) {
            gameOver = true;
            alert(`${currentPlayer} wins!`);
        } else if (moves === 9) {
            gameOver = true;
            alert("It's a draw!");
        } else {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        }
    }
}

function restartGame() {
    cells.forEach(cell => {
        cell.textContent = '';
    });
    currentPlayer = 'X';
    moves = 0;
    gameOver = false;
}

function checkWin() {
    const winConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    return winConditions.some(condition => {
        const [a, b, c] = condition;
        return cells[a].textContent && cells[a].textContent === cells[b].textContent && cells[a].textContent === cells[c].textContent;
    });
}

createGrid();

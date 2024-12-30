document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM fully loaded and parsed');
    const board = document.querySelector('.board');
    const modeSelect = document.getElementById('mode-select');
    const cheatInput = document.getElementById('cheat-input');
    const BOARD_SIZE = 10;
    let NUM_MINES = 0;
    let mineLocations = [];
    let cheatActivated = false;

    function createBoard() {
        console.log('Creating board');
        for (let i = 0; i < BOARD_SIZE * BOARD_SIZE; i++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            cell.dataset.index = i;
            board.appendChild(cell);
        }
    }

    function placeMines() {
        console.log('Placing mines');
        for (let i = 0; i < NUM_MINES; i++) {
            let randomIndex;
            do {
                randomIndex = Math.floor(Math.random() * (BOARD_SIZE * BOARD_SIZE));
            } while (mineLocations.includes(randomIndex));
            mineLocations.push(randomIndex);
        }
    }

    function handleCheatInput(event) {
        if (event.key === 'Enter') {
            const cheatWord = cheatInput.value.toLowerCase();
            if (cheatWord === 'teh pucuk' || cheatWord === 'teh kotak') {
                activateCheat();
            }
        }
    }

    function activateCheat() {
        console.log('Cheat activated');
        cheatActivated = true;
        // Tambahkan logika untuk mengaktifkan cheat di sini
        // Misalnya, menampilkan semua bom dengan tanda hijau
        mineLocations.forEach(index => {
            const cell = board.querySelector(`.cell[data-index="${index}"]`);
            cell.classList.add('cheat');
            cell.textContent = '🟢';
        });
    }

    function endGame(win) {
        console.log('Game over');
        board.removeEventListener('click', handleCellClick);
        if (!win) {
            // Menampilkan semua posisi bom jika cheat diaktifkan atau jika kalah
            if (cheatActivated) {
                mineLocations.forEach(index => {
                    const cell = board.querySelector(`.cell[data-index="${index}"]`);
                    cell.classList.add('clicked', 'mine');
                    cell.textContent = '💣';
                });
            }
        }
        setTimeout(() => {
            if (win) {
                alert("Congratulations! You win!");
            } else {
                if (confirm("Game over! Play again?")) {
                    resetGame();
                }
            }
        }, 100);
    }

    function resetGame() {
        console.log('Resetting game');
        board.innerHTML = '';
        mineLocations = [];
        cheatActivated = false; // Reset cheat status
        setGameMode();
    }

    function setGameMode() {
        console.log('Setting game mode');
        const mode = modeSelect.value;
        if (mode === 'easy') {
            NUM_MINES = Math.floor(BOARD_SIZE * BOARD_SIZE * 0.1); // 10% of total cells
        } else if (mode === 'hard') {
            NUM_MINES = Math.floor(BOARD_SIZE * BOARD_SIZE * 0.3); // 20% of total cells
        } else if (mode === 'baby') {
            NUM_MINES = 0; // No mines
        }
        createBoard();
        if (mode !== 'baby') { // Only place mines if not in baby mode
            placeMines();
        }
        board.addEventListener('click', handleCellClick);
    }

    function handleCellClick(event) {
        console.log('Cell clicked');
        const cell = event.target;
        const index = parseInt(cell.dataset.index);
        if (!cell.classList.contains('clicked')) {
            if (mineLocations.includes(index)) {
                cell.classList.add('mine');
                cell.textContent = '💣';
                endGame(false);
            } else {
                const numMines = countAdjacentMines(index);
                if (numMines > 0) {
                    cell.textContent = numMines;
                }
                cell.classList.add('clicked');
                const remainingCells = document.querySelectorAll('.cell:not(.clicked)').length;
                if (remainingCells === NUM_MINES) {
                    endGame(true);
                }
            }
        }
    }

    function countAdjacentMines(index) {
        console.log('Counting adjacent mines');
        const adjacentIndices = [
            index - BOARD_SIZE - 1, index - BOARD_SIZE, index - BOARD_SIZE + 1,
            index - 1, index + 1,
            index + BOARD_SIZE - 1, index + BOARD_SIZE, index + BOARD_SIZE + 1
        ];

        let count = 0;
        adjacentIndices.forEach(adjIndex => {
            if (mineLocations.includes(adjIndex)) {
                count++;
            }
        });

        return count;
    }

    // Panggil setGameMode() saat halaman dimuat
    setGameMode();

    // Tambahkan event listener untuk memanggil setGameMode() saat mode berubah
    modeSelect.addEventListener('change', resetGame);

    // Tambahkan event listener untuk memanggil handleCheatInput() saat input kata cheat berubah
    cheatInput.addEventListener('keydown', handleCheatInput);
});

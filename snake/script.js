const snake = document.getElementById('snake');
const food = document.getElementById('food');
const upBtn = document.getElementById('up-btn');
const downBtn = document.getElementById('down-btn');
const leftBtn = document.getElementById('left-btn');
const rightBtn = document.getElementById('right-btn');
let snakeParts = [];
let snakeLength = 1;
let snakeX = 200;
let snakeY = 200;
let foodX;
let foodY;
let score = 0;
let interval;
let direction = 'right';

function startGame() {
    createFood();
    interval = setInterval(moveSnake, 120);
}

function createFood() {
    foodX = Math.floor(Math.random() * 20) * 20;
    foodY = Math.floor(Math.random() * 20) * 20;
    food.style.left = foodX + 'px';
    food.style.top = foodY + 'px';
}

function moveSnake() {
    switch (direction) {
        case 'up':
            snakeY -= 20;
            break;
        case 'down':
            snakeY += 20;
            break;
        case 'left':
            snakeX -= 20;
            break;
        case 'right':
            snakeX += 20;
            break;
    }

    if (snakeX < 0 || snakeX >= 400 || snakeY < 0 || snakeY >= 400 || checkCollision()) {
        clearInterval(interval);
        alert('Game Over! Your score: ' + score);
        return;
    }

    snakeParts.push({ x: snakeX, y: snakeY });

    if (snakeX === foodX && snakeY === foodY) {
        score++;
        createFood();
        snakeLength++;
    } else if (snakeParts.length > snakeLength) {
        snakeParts.shift();
    }

    renderSnake();
}

function checkCollision() {
    for (let i = 1; i < snakeParts.length; i++) {
        if (snakeX === snakeParts[i].x && snakeY === snakeParts[i].y) {
            return true;
        }
    }
    return false;
}

function renderSnake() {
    snake.innerHTML = '';
    snakeParts.forEach(part => {
        const snakePart = document.createElement('div');
        snakePart.style.width = '20px';
        snakePart.style.height = '20px';
        snakePart.style.backgroundColor = '#0f0';
        snakePart.style.position = 'absolute';
        snakePart.style.left = part.x + 'px';
        snakePart.style.top = part.y + 'px';
        snake.appendChild(snakePart);
    });
}

document.addEventListener('keydown', (e) => {
    switch (e.key) {
        case 'ArrowUp':
            if (direction !== 'down') direction = 'up';
            break;
        case 'ArrowDown':
            if (direction !== 'up') direction = 'down';
            break;
        case 'ArrowLeft':
            if (direction !== 'right') direction = 'left';
            break;
        case 'ArrowRight':
            if (direction !== 'left') direction = 'right';
            break;
    }
});

upBtn.addEventListener('click', () => {
  if (direction !== 'down') direction = 'up';
});

downBtn.addEventListener('click', () => {
  if (direction !== 'up') direction = 'down';
});

leftBtn.addEventListener('click', () => {
  if (direction !== 'right') direction = 'left';
});

rightBtn.addEventListener('click', () => {
  if (direction !== 'left') direction = 'right';
});

startGame();

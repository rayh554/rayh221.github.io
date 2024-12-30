// Generate random number
const randomNumber = Math.floor(Math.random() * 100) + 1;

// Get user input
const guessField = document.getElementById('guessField');
const submitButton = document.querySelector('button');
const message = document.getElementById('message');
let guessCount = 0;
let gameOver = false;

// Check user's guess
function checkGuess() {
  if (gameOver) {
    return;
  }

  let userGuess = parseInt(guessField.value);
  if (userGuess === randomNumber) {
    message.textContent = `Selamat! Anda menebak dengan benar angka ${randomNumber} dalam ${guessCount} tebakan!`;
    message.style.color = 'green';
    gameOver = true;
  } else {
    guessCount++;
    if (userGuess < randomNumber) {
      message.textContent = 'Tebakan Anda terlalu rendah, coba lagi!';
      message.style.color = 'red';
    } else if (userGuess > randomNumber) {
      message.textContent = 'Tebakan Anda terlalu tinggi, coba lagi!';
      message.style.color = 'red';
    }
  }

  guessField.value = '';
  guessField.focus();
}

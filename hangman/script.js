//ddata soal
const questions = [
    // Soal tentang web
    { question: "Teknologi yang digunakan untuk menyimpan dan mengelola data di internet.", answer: "database" },
    { question: "Bahasa markup yang digunakan untuk membangun struktur halaman web.", answer: "html" },
    { question: "Bahasa pemrograman yang digunakan untuk menambahkan gaya pada halaman web.", answer: "css" },
    { question: "Bahasa pemrograman yang sering digunakan untuk mengelola basis data.", answer: "sql" },
    { question: "Sebuah protokol yang digunakan untuk mentransfer file di internet.", answer: "ftp" },
    { question: "Sebuah bahasa pemrograman yang sering digunakan untuk membuat aplikasi mobile.", answer: "java" },
    { question: "Perangkat keras yang digunakan untuk menyimpan data komputer.", answer: "harddisk" },
    { question: "Sebuah bahasa pemrograman yang digunakan untuk membuat aplikasi iOS.", answer: "swift" },
    { question: "Sebuah bahasa pemrograman yang digunakan untuk membuat animasi di halaman web.", answer: "css" },
    { question: "Bahasa markup yang digunakan untuk membuat struktur halaman web.", answer: "html" },
    { question: "Sebuah protokol yang digunakan untuk mengontrol dan mengatur lalu lintas data di internet.", answer: "tcpip" },
    { question: "Sebuah bahasa pemrograman yang digunakan untuk membuat konten dinamis di halaman web.", answer: "php" },
    { question: "Sebuah teknologi yang digunakan untuk menyimpan dan mengelola dokumen.", answer: "database" },
    { question: "Sebuah bahasa pemrograman yang digunakan untuk membuat aplikasi mobile berbasis iOS.", answer: "swift" },
    { question: "Sebuah bahasa pemrograman yang sering digunakan untuk membuat animasi di halaman web.", answer: "css" },
    { question: "Sebuah teknologi yang digunakan untuk membuat koneksi internet lebih cepat dan stabil.", answer: "fiber" },
    { question: "Sebuah perangkat keras yang digunakan untuk menyimpan dan mengakses data di komputer.", answer: "harddisk" },
    { question: "Sebuah platform media sosial yang digunakan untuk berbagi video secara online.", answer: "youtube" },
    { question: "Sebuah bahasa pemrograman yang digunakan untuk membuat aplikasi berbasis web.", answer: "javascript" },
    { question: "Sebuah protokol yang digunakan untuk mengontrol dan mengatur lalu lintas data di internet.", answer: "tcpip" },
    { question: "Sebuah bahasa pemrograman yang sering digunakan untuk membuat animasi di halaman web.", answer: "css" },
    { question: "Sebuah teknologi yang digunakan untuk membuat koneksi internet lebih cepat dan stabil.", answer: "fiber" },
    { question: "Sebuah perangkat keras yang digunakan untuk menyimpan dan mengakses data di komputer.", answer: "harddisk" },
    { question: "Sebuah platform media sosial yang digunakan untuk berbagi foto secara online.", answer: "instagram" },

    // Soal tentang PC dan seputar komputer
    { question: "Bagian utama dari komputer yang berfungsi sebagai otak sistem komputer.", answer: "cpu" },
    { question: "Sebuah perangkat keras yang digunakan untuk menampilkan output visual dari komputer.", answer: "monitor" },
    { question: "Sebuah perangkat keras yang digunakan untuk memasukkan data ke dalam komputer.", answer: "keyboard" },
    { question: "Sebuah perangkat keras yang digunakan untuk menggerakkan pointer pada layar komputer.", answer: "mouse" },
    { question: "Sebuah sistem operasi yang dikembangkan oleh Microsoft.", answer: "windows" },
    { question: "Sebuah perangkat keras yang digunakan untuk menyimpan data secara permanen di komputer.", answer: "harddisk" },
    { question: "Sebuah perangkat keras yang digunakan untuk menyimpan data sementara yang dibutuhkan oleh CPU.", answer: "ram" },
    { question: "Sebuah perangkat keras yang digunakan untuk menghubungkan komputer dengan jaringan lokal atau internet.", answer: "networkcard" },
    { question: "Sebuah perangkat keras yang digunakan untuk mencetak dokumen atau gambar dari komputer.", answer: "printer" },
    { question: "Sebuah program yang digunakan untuk melindungi komputer dari program jahat.", answer: "antivirus" },
    { question: "Sebuah perangkat lunak yang digunakan untuk membuat dan mengedit dokumen teks.", answer: "word" },
    { question: "Sebuah perangkat lunak yang digunakan untuk membuat dan menyajikan presentasi.", answer: "powerpoint" },
    { question: "Sebuah perangkat keras yang digunakan untuk menyimpan dan membaca data dari disk.", answer: "drive" },
    { question: "Sebuah perangkat lunak yang digunakan untuk membuat dan mengelola lembar kerja, tabel, dan grafik.", answer: "excel" },
    { question: "Sebuah program yang digunakan untuk mengakses dan menjelajahi internet.", answer: "browser" },
    { question: "Sebuah perangkat keras yang digunakan untuk mengirim dan menerima data secara nirkabel.", answer: "wifiadapter" },
    { question: "Sebuah perangkat keras yang digunakan untuk menyimpan cadangan data komputer.", answer: "backupdrive" },
    { question: "Sebuah perangkat keras yang digunakan untuk mendengarkan suara dari komputer.", answer: "speaker" },
    { question: "Sebuah perangkat lunak yang digunakan untuk mengedit gambar dan grafik.", answer: "photoshop" },
    { question: "Sebuah perangkat keras yang digunakan untuk menghubungkan komputer dengan perangkat lain.", answer: "port" },
    { question: "Sebuah perangkat lunak yang digunakan untuk menyusun dan mengatur informasi dalam bentuk file.", answer: "filemanager" },
    { question: "Sebuah perangkat lunak yang digunakan untuk mengirim dan menerima email.", answer: "emailclient" },
    { question: "Sebuah perangkat keras yang digunakan untuk menghubungkan komputer dengan layar yang lebih besar atau proyektor.", answer: "vga" },
    { question: "Sebuah perangkat keras yang digunakan untuk menyalakan komputer.", answer: "powerbutton" },
    { question: "Sebuah perangkat keras yang digunakan untuk menyimpan dan membaca data dari disk.", answer: "diskdrive" },
    { question: "Sebuah perangkat keras yang digunakan untuk menyimpan data cadangan di luar komputer.", answer: "externaldrive" },
    { question: "Sebuah perangkat keras yang digunakan untuk menyimpan dan membaca data dari disk.", answer: "cdrom" },
    { question: "Sebuah perangkat keras yang digunakan untuk memproyeksikan gambar dari komputer ke layar yang lebih besar.", answer: "projector" },
    { question: "Sebuah perangkat keras yang digunakan untuk menghubungkan komputer dengan internet melalui kabel.", answer: "ethernet" },
    { question: "Sebuah perangkat keras yang digunakan untuk menghubungkan komputer dengan layar eksternal atau proyektor.", answer: "vga" },
    { question: "Sebuah perangkat keras yang digunakan untuk menghubungkan komputer dengan perangkat jaringan lainnya.", answer: "networkcard" },

    // Soal campuran
    { question: "Siapakah presiden pertama Indonesia?", answer: "soekarno" },
    { question: "Siapakah presiden Indonesia saat ini?", answer: "jokowi" },
    { question: "Siapakah pencipta lagu Indonesia Raya?", answer: "wage" },
    { question: "Siapakah penulis novel Laskar Pelangi?", answer: "andrea" },
    { question: "Siapakah arsitek utama Masjid Istiqlal?", answer: "frederich" },
    // Tambahkan pertanyaan dan jawaban di sini...
];


let currentQuestionIndex = Math.floor(Math.random() * questions.length);
let currentQuestion = questions[currentQuestionIndex];
let guessedLetters = [];
let wrongLetters = [];

const questionContainer = document.getElementById('question');
const wordContainer = document.getElementById('word-container');
const wrongLettersContainer = document.getElementById('wrong-letters-container');
const manParts = document.querySelectorAll('#man > div');
const keyboardContainer = document.getElementById('keyboard-container');

function displayQuestion() {
    questionContainer.textContent = currentQuestion.question;
}

function displayWord() {
    wordContainer.innerHTML = currentQuestion.answer
        .split('')
        .map(letter => `<span>${guessedLetters.includes(letter) ? letter : '_'}</span>`)
        .join('');

    const winning = wordContainer.innerText === currentQuestion.answer;
    if (winning) {
        alert('Selamat! Anda menjawab dengan benar!');
        nextQuestion();
    }
}
function nextQuestion() {
    // Reset game state
    guessedLetters = [];
    wrongLetters = [];
    for (const part of manParts) {
        part.style.visibility = 'hidden';
    }
    keyboardContainer.innerHTML = '';
    
    // Select new question
    currentQuestionIndex = Math.floor(Math.random() * questions.length);
    currentQuestion = questions[currentQuestionIndex];

    // Display new question and word
    displayQuestion();
    displayWord();
    createKeyboard();
}

function checkWin() {
    const winning = wordContainer.innerText === currentQuestion.answer;
    if (winning) {
        alert('Selamat! Anda menjawab dengan benar!');
        nextQuestion();
    }
}

function checkLoss() {
    if (wrongLetters.length === manParts.length) {
        alert('Game Over! Anda kalah!');
        nextQuestion();
    }
}

function checkLetter(letter) {
    if (currentQuestion.answer.includes(letter)) {
        guessedLetters.push(letter);
        displayWord();
        checkWin();
    } else {
        wrongLetters.push(letter);
        displayWrongLetters();
        displayManPart(wrongLetters.length - 1);
        checkLoss();
    }
}




function displayWrongLetters() {
    wrongLettersContainer.innerHTML = `Huruf Salah: ${wrongLetters.join(', ')}`;

    if (wrongLetters.length === manParts.length) {
        alert('Game Over! Anda kalah!');
        nextQuestion();
    }
}

function displayManPart(index) {
    manParts[index].style.visibility = 'visible';
}

function checkLetter(letter) {
    if (currentQuestion.answer.includes(letter)) {
        guessedLetters.push(letter);
        displayWord();
    } else {
        wrongLetters.push(letter);
        displayWrongLetters();
        displayManPart(wrongLetters.length - 1);
    }
}

function createKeyboard() {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    alphabet.forEach(letter => {
        const button = document.createElement('button');
        button.innerText = letter;
        button.classList.add('keyboard-button');
        button.addEventListener('click', () => {
            function checkLetter(letter) {
                if (currentQuestion.answer.includes(letter)) {
                    guessedLetters.push(letter);
                    displayWord();
                } else {
                    wrongLetters.push(letter);
                    displayWrongLetters();
                    displayManPart(wrongLetters.length - 1);
                }
                // Hapus baris ini untuk mengaktifkan tombol keyboard yang tetap aktif
                // button.disabled = true;
            }
            
            checkLetter(letter);
        });
        keyboardContainer.appendChild(button);
    });
}

function nextQuestion() {
    // Reset game state
    guessedLetters = [];
    wrongLetters = [];
    for (const part of manParts) {
        part.style.visibility = 'hidden';
    }
    keyboardContainer.innerHTML = '';
    
    // Select new question
    currentQuestionIndex = (currentQuestionIndex + 1) % questions.length;
    currentQuestion = questions[currentQuestionIndex];

    // Display new question and word
    displayQuestion();
    displayWord();
    createKeyboard();
}

displayQuestion();
displayWord();
createKeyboard();

// Fungsi untuk menyisipkan pesan ke dalam gambar
function encodeImage(image, message) {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    canvas.width = image.width;
    canvas.height = image.height;

    ctx.drawImage(image, 0, 0);

    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const pixels = imageData.data;

    const binaryMessage = message
        .split("")
        .map(char => char.charCodeAt(0).toString(2).padStart(8, "0"))
        .join("") + "0000001100110011"; // "###" sebagai penanda akhir

    let messageIndex = 0;
    for (let i = 0; i < pixels.length; i += 4) {
        if (messageIndex < binaryMessage.length) {
            pixels[i] = (pixels[i] & ~1) | parseInt(binaryMessage[messageIndex], 2);
            messageIndex++;
        }
    }

    ctx.putImageData(imageData, 0, 0);
    return canvas;
}

// Fungsi untuk membaca pesan dari gambar
function decodeImage(image) {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    canvas.width = image.width;
    canvas.height = image.height;

    ctx.drawImage(image, 0, 0);

    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const pixels = imageData.data;

    let binaryMessage = "";
    for (let i = 0; i < pixels.length; i += 4) {
        binaryMessage += pixels[i] & 1;
    }

    const message = binaryMessage
        .match(/.{1,8}/g)
        .map(byte => String.fromCharCode(parseInt(byte, 2)))
        .join("");

    const endMarker = message.indexOf("###");
    return endMarker !== -1 ? message.slice(0, endMarker) : "Pesan tidak ditemukan.";
}

// Event Handlers
document.getElementById("encodeButton").onclick = () => {
    document.getElementById("selection").classList.add("hidden");
    document.getElementById("encodeSection").classList.remove("hidden");
};

document.getElementById("decodeButton").onclick = () => {
    document.getElementById("selection").classList.add("hidden");
    document.getElementById("decodeSection").classList.remove("hidden");
};

document.getElementById("encodeSubmit").onclick = () => {
    const fileInput = document.getElementById("encodeImageInput");
    const message = document.getElementById("secretMessage").value;

    if (!fileInput.files.length || !message.trim()) {
        alert("Masukkan gambar dan pesan!");
        return;
    }

    const file = fileInput.files[0];
    const reader = new FileReader();

    reader.onload = e => {
        const image = new Image();
        image.onload = () => {
            const canvas = encodeImage(image, message);

            const resultCanvas = document.getElementById("encodedCanvas");
            resultCanvas.classList.remove("hidden");
            resultCanvas.width = canvas.width;
            resultCanvas.height = canvas.height;
            resultCanvas.getContext("2d").drawImage(canvas, 0, 0);

            const downloadLink = document.getElementById("downloadEncoded");
            downloadLink.href = canvas.toDataURL("image/png");
            downloadLink.classList.remove("hidden");
        };
        image.src = e.target.result;
    };

    reader.readAsDataURL(file);
};

document.getElementById("decodeSubmit").onclick = () => {
    const fileInput = document.getElementById("decodeImageInput");

    if (!fileInput.files.length) {
        alert("Masukkan gambar!");
        return;
    }

    const file = fileInput.files[0];
    const reader = new FileReader();

    reader.onload = e => {
        const image = new Image();
        image.onload = () => {
            const message = decodeImage(image);
            document.getElementById("decodedMessage").innerText = "Pesan: " + message;
        };
        image.src = e.target.result;
    };

    reader.readAsDataURL(file);
};
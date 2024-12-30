from flask import Flask, request, jsonify
import random
import string

app = Flask(__name__)

class EnigmaCipher:
    def __init__(self, key):
        random.seed(key)
        self.symbols = string.ascii_letters + string.digits + string.punctuation + " "
        self.mapping = self._create_mapping()

    def _create_mapping(self):
        symbols_list = list(self.symbols)
        shuffled_list = symbols_list[:]
        random.shuffle(shuffled_list)
        return dict(zip(symbols_list, shuffled_list))

    def encrypt(self, text):
        encrypted = ''.join(self.mapping.get(char, char) for char in text)
        return encrypted

    def decrypt(self, encrypted_text):
        reverse_mapping = {v: k for k, v in self.mapping.items()}
        decrypted = ''.join(reverse_mapping.get(char, char) for char in encrypted_text)
        return decrypted

@app.route('/process', methods=['POST'])
def process():
    data = request.json
    key = data.get('key')
    mode = data.get('mode')
    text = data.get('text')

    if not key or not mode or not text:
        return jsonify({"error": "Missing parameters"}), 400

    cipher = EnigmaCipher(key)

    if mode == "encrypt":
        result = cipher.encrypt(text)
    elif mode == "decrypt":
        result = cipher.decrypt(text)
    else:
        return jsonify({"error": "Invalid mode"}), 400

    return jsonify({"result": result})

if __name__ == '__main__':
    app.run(debug=True)
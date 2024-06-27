// script/script.js

function encriptar() {
    const inputTexto = document.getElementById('inputTexto').value;
    if (inputTexto.trim() !== "") {
        document.getElementById('imageContainer').style.display = 'none';
        document.getElementById('outputTexto').value = encriptarTexto(inputTexto);
    }
}

function desencriptar() {
    const inputTexto = document.getElementById('inputTexto').value;
    if (inputTexto.trim() !== "") {
        document.getElementById('imageContainer').style.display = 'none';
        document.getElementById('outputTexto').value = desencriptarTexto(inputTexto);
    }
}

function encriptarTexto(texto) {
    // Aquí puedes agregar tu lógica de encriptación
    return texto.split('').reverse().join('');
}

function desencriptarTexto(texto) {
    // Aquí puedes agregar tu lógica de desencriptación
    return texto.split('').reverse().join('');
}

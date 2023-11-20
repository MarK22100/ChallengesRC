let textos = [];
let texto = "";

while (texto !== null) {
    texto = prompt("Introduce una cadena de texto:");
    if (texto !== null) {
        textos.push(texto);
    }
}

alert(textos.join('-'));

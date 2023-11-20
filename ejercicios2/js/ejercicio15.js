let texto = prompt("Introduce una cadena de texto: ");
let posicion = -1;

for (let i = 0; i < texto.length; i++) {
    let letra = texto[i].toLowerCase();
    if (letra === 'a' || letra === 'e' || letra === 'i' || letra === 'o' || letra === 'u') {
        posicion = i;
        break;
    }
}

if (posicion !== -1) {
    console.log("La primera vocal se encuentra en la posición: " + posicion);
} else {
    console.log("El texto introducido no contiene vocales.");
}
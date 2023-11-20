let texto = prompt("Introduce una cadena de texto: ");
let textoConGuiones = "";

for(let i = 0; i < texto.length; i++) {
    textoConGuiones += texto[i] + "-";
}

// Elimina el último guión
textoConGuiones = textoConGuiones.slice(0, -1);

console.log(textoConGuiones);
let numeros = [];
let numero = "";

while (numero !== null) {
    numero = prompt("Introduce un número:");
    if (numero !== null) {
        if (isNaN(numero)) {
            alert("Eso no es un número. Por favor, introduce un número.");
        } else {
            numeros.push(Number(numero));
        }
    }
}

let suma = numeros.reduce((a, b) => a + b, 0);
alert("La suma total de los números introducidos es " + suma);
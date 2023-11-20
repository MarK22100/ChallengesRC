
document.getElementById('button8').addEventListener('click', button8)

function button8() {
    let numero =parseFloat(prompt("Ingrese un número:"));

    if (numero % 2 === 0) {
        document.write('El '+ numero + " es divisible por 2.");
    } else {
        document.write('El '+ numero + " no es divisible por 2.");
    }
}


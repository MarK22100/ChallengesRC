document.getElementById('button11').addEventListener('click', button11)

function button11() {
    
    let num1 = parseFloat(prompt("Escribe un numero para saber por cuál es divisible"));
    const divisores = [2, 3, 5, 7];

    // Bandera para verificar si el número es divisible por al menos uno de los divisores
    let esDivisible = false;
    
    // Iterar sobre los divisores y verificar si el número es divisible por cada uno
    for (let i = 0; i < divisores.length; i++) {
        const divisor = divisores[i];
        
        if (num1 % divisor === 0) {
            document.write(`El ${num1} es divisible por ${divisor}<br>`);
            esDivisible = true; // Actualizar la bandera si es divisible por al menos uno
        }
    }
    
    // Si el número no es divisible por ninguno de los divisores
    if (!esDivisible) {
        document.write(`El ${num1} no es divisible por ninguno de los divisores especificados`);
    }

}
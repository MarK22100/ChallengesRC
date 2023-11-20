document.getElementById('button7').addEventListener('click', button7)

function button7() {
    
let num1 = parseInt(prompt('Ingresa un numero'));
let num2 = parseInt(prompt('Ingresa un numero'));
let num3 = parseInt(prompt('Ingresa un numero'));

let numMax = Math.max(num1, num2, num3)
document.write('El numero de mayor valor es el: ', numMax);

}


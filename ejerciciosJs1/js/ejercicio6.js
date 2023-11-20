//Ejercicio 1
document.getElementById('button6').addEventListener('click' , button6)

function button6() {
    

let num1=parseInt(prompt("Indica un numero"));
let num2=parseInt(prompt("Ïndica otro nummero"));
let numMax = Math.max(num1, num2);

//Ejercicio2
//Escritura en pantalla
document.write("El numero mas mayor entre los dos es: ", numMax);
}

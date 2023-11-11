let buttonC = document.querySelector(".btn_circulo");
let buttonT = document.querySelector(".btn_triangulo");
const pi = 3.14

buttonC.addEventListener("click", areaCirc);

function areaCirc(){
    
    let radio = parseInt(prompt("Ingrese valor del radio"));
    let areaCirculo = ((pi) * radio **2);

    console.log(areaCirculo);
}


buttonT.addEventListener("click", areaTrian);
function areaTrian(){
    let base = parseInt(prompt("ingrese base de triangulo"));
    let altura = parseInt(prompt("ingrese altura de triangulo"));

    let areaTriangulo = (base * altura / 2);

    console.log(areaTriangulo);
}
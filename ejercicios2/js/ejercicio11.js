let nombres = [];
let edades = [];

for(let i = 0; i < 3; i++) {
    let nombre = prompt("Introduce el nombre " + (i+1) + ": ");
    let edad = prompt("Introduce la edad de " + nombre + ": ");
    nombres.push(nombre);
    edades.push(edad);
}

let mayor = Math.max(...edades);
let indice = edades.indexOf(String(mayor));
let nombreMayor = nombres[indice];

console.log(nombreMayor + " es el mayor con " + mayor + " años.");
let filas = prompt("Introduce el número de filas: ");
let columnas = prompt("Introduce el número de columnas: ");
let num = filas * columnas;

let tabla = "<table>";
for(let i = 0; i < filas; i++) {
    tabla += "<tr>";
    for(let j = 0; j < columnas; j++) {
        tabla += "<td>" + num + "</td>";
        num--;
    }
    tabla += "</tr>";
}
tabla += "</table>";

document.write(tabla);
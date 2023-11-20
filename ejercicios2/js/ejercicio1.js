let edad = parseInt(prompt('Ingresa tu edad:'))

// Comprobar si la entrada es un número
if (isNaN(edad)) {
    alert("La edad ingresada no es un número válido.");
} else {
    // Comprobar si el usuario es mayor de 18 años
    if (edad >= 18) {
        alert("Ya puedes conducir.");
    } else {
        alert("No puedes conducir aún.");
    }
}
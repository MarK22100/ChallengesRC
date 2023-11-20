let dniNum = prompt("Ingresa tu DNI (0 - 99999999):");

while (dniNum !== null) {
    if (isNaN(dniNum) || dniNum < 0 || dniNum > 99999999) {
        alert("Por favor ingresa un valor valido - 0 and 99999999");
    } else {
        let letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E'];
        let letraSelec = dniNum % 23;
        alert(`La letra correspondiente a el numero de DNI ${dniNum} es '${letras[letraSelec]}'`);
    }
    dniNum = prompt("Por favor ingresa tu numero de DNI (0 - 99999999):");
}
document.getElementById('button9').addEventListener('click', button9)

function button9(){

let frase = prompt("Escribe una frase a extraerle las vocales")
let vocales = frase.match(/[aeiou]/gi);

if (vocales) {
    document.write('Las vocales en la frase son: '+ vocales)
}
else{
    document.write('La frase no contienen vocales.')
}
}
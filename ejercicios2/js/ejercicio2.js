let nota = parseInt(prompt('Ingresa nota'))

if (nota>=0 && nota <=2) {
    alert('La nota '+nota+' calificada como MUY DEFICIENTE')
}
else if(nota===3 || nota ===4){
    alert('La nota '+nota+ 'es calificada como INSUFISIENTE')
}else if(nota ===5 || nota ===6){
    alert('La nota '+nota+ 'es calificada como SUFICIENTE')
}else if(nota===7){
    alert('La nota '+nota+ 'es calificada como BIEN')
}else if(nota===8 || nota ===9){
    alert('La nota '+nota+ 'es calificada como NOTABLE')
}else if(nota===10){
    alert('La nota '+nota+ 'es calificada como SOBRESALIENTE')
}
else if(nota>= 11){
    alert('Introduce un número válido')
}
else if(isNaN(nota)){
    alert('Numero erroneo')
}

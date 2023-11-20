document.getElementById('button10').addEventListener('click', button10)

function button10() {
    
    let num1 = parseFloat(prompt("Escribe un numero para saber por cual es divisible"))
    if (num1 % 2 === 0){
            document.write('El '+ num1 +' es divisible por 2')
    }
    else if(num1%3 === 0){
        document.write('El '+ num1 +' es divisible por 3');
    }
    else if(num1%5 === 0){
        
        document.write('El '+ num1 +' es divisible por 5');
    }
    else if(num1%7 === 0){
        document.write('El '+ num1 +' es divisible por 7');
    }

}
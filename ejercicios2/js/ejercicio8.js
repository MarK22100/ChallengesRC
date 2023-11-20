let num = prompt('Ingresa un numero del 0 a 50')

if (num <= 50){
    for (let i = 1; i <= num; i++) {
        console.log(String(i).repeat(i))
    }
}
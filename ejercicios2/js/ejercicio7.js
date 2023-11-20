let inputNum=(prompt('ingresa un numero de 0 a 50'))


if(inputNum <= 50)
{
    for (let i = inputNum; i > 0; i--) {
        console.log(String(i).repeat(i));
    }
}
else{
    alert('El numero no debe ser entre 0 y 50')
}

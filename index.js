const displayValorAnterior = document.getElementById('valor-anterior');
const displayValorActual = document.getElementById('valor-actual');
const buttonNumber = document.querySelectorAll('.number');
const buttonOperator = document.querySelectorAll('.operator');

//Probamos que funcione la calculadora en la consola, después lo podemos quitar del código
/* const calculadora = new Calculadora();
console.log(calculadora.sumar(2,3));
console.log(calculadora.restar(2,3));
console.log(calculadora.multiplicar(2,3));
console.log(calculadora.dividir(2,3)); */

const display = new Display(displayValorActual, displayValorAnterior);

buttonNumber.forEach(button=> {
    button.addEventListener('click', () => {
        display.agregarNumero(button.innerHTML);
    });
});

buttonOperator.forEach( button => {
    button.addEventListener('click', () => {
        display.computar(button.value);
    })
})

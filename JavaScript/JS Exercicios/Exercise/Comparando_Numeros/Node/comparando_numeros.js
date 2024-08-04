const prompt = require('prompt-sync')();

const num1Valor = Number(prompt('Qual o primeiro número: '));

const num2Valor = Number(prompt('Qual o segundo número: '));

if (num1Valor > num2Valor) {

    console.log(`Primeiro Número = ${num1Valor} é maior que o Segundo Número = ${num2Valor}`);

} else if (num2Valor > num1Valor) {

    console.log(`Segundo Número = ${num2Valor} é maior que o Primeiro Número = ${num1Valor}`);

} else {

    console.log(`Primeiro Número = ${num1Valor} e o Segundo Número - ${num2Valor} são iguais`);

}
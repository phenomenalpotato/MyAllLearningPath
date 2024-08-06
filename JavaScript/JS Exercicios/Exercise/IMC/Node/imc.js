const prompt = require('prompt-sync')();

const pesoPessoa = Number(prompt('Qual o peso? (Kg): '));

const alturaPessoa = Number(prompt('Qual a altura? (m): '));

const imc = pesoPessoa / (alturaPessoa ** 2);

console.log(`O IMC dessa pessoa é de ${imc.toFixed(1)}`);

if (imc <= 0) {

    console.log('ERRO ao digitar ou a pessoa está só o farelo.');

} else if (imc < 18.5) {

    console.log('Abaixo do peso!');

} else if (imc < 25) {

    console.log('Peso Ideal!');

} else if (imc < 30) {

    console.log('Sobrepeso!');

} else if(imc < 40) {

    console.log('Obesidade!');

} else {

    console.log('Obesidade Mórbida');

}
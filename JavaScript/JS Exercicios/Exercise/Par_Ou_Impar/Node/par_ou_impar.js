const prompt = require('prompt-sync')();

const numero = Number(prompt('Qual o numero: '));

if (numero % 2 == 0) {

    console.log('É PAR!');

} else {

    console.log('É IMPAR!');
}
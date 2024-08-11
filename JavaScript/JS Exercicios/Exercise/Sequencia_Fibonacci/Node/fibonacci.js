const prompt = require('prompt-sync')();

let termosUser = Number(prompt('Quantos termos você quer mostrar: '));

let cont = 1;

let fibonacci = 1;

let primeiroTermo = 0;

let segundoTermo = 1;

while (cont <= termosUser) {

    console.log(`${fibonacci} ->`);

    fibonacci = primeiroTermo + segundoTermo;

    primeiroTermo = segundoTermo;

    segundoTermo = fibonacci;

    cont++;

};
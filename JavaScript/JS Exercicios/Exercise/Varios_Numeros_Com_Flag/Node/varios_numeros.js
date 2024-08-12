const prompt = require('prompt-sync')();

let numUser = 0;

let somaValores = 0;

let quantidadeNumeros = 0;

while (true) {

    numUser = Number(prompt('Digite um valor (999 para parar): '))

    if (numUser == 999) {

        break;
    }

    quantidadeNumeros++;

    somaValores += numUser;
}

console.log(`A soma dos ${quantidadeNumeros} valores, foi ${somaValores}`);
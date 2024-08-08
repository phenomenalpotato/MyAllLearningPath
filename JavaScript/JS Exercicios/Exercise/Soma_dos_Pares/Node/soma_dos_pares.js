const prompt = require('prompt-sync')();

let colecaoValores = [];

let soma = 0;

let quantidadePares = 0;

for (let cont = 0; cont < 6; cont++) {

    colecaoValores.push(Number(prompt('Digite o numero: ')));

    if(colecaoValores[cont] % 2 == 0) {

        soma += colecaoValores[cont];

        quantidadePares++;

    }

}

console.log(`A quantidade de números pares é: ${quantidadePares} - E a soma entre eles é: ${soma}`);
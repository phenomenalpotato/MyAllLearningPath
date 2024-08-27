const prompt = require('prompt-sync')();

let dados = [];

let numerosReias = [[], []];

for (let cont = 0; cont < 7; cont++) {

    dados.push(Number(prompt(`Digite o ${cont + 1}º valor: `)));

    if (dados[cont] % 2 == 0) {

        numerosReias[0].push(dados[cont]);

    } else {

        numerosReias[1].push(dados[cont]);
    }
}

console.log(`Os números pares digitados foram: ${numerosReias[0].toSorted((a, b) => (a - b))}`);

console.log(`Os números impares digitados foram: ${numerosReias[1].toSorted((a, b) => (a - b))}`);
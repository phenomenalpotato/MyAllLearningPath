const prompt = require('prompt-sync')();

const rep = Number(prompt('Quantos numeros deseja adicionar: '));

let numeros = [];

let numAtual = 0;

for(let c = 0; c < rep; c++) {

    numAtual = Number(prompt('Qual são os numeros: '));

    numeros.push(numAtual);
}

const numOrdem = numeros.toSorted((a, b) => (a - b));

console.log(`Os números são ${numeros} e do menor para o maior: ${numOrdem}. O Menor número digitado é ${numOrdem[0]}, e o Maior é ${numOrdem[numeros.length - 1]}`);
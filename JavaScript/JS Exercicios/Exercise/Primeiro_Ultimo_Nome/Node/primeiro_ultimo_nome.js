const prompt = require('prompt-sync')();

const nome = prompt('Qual o nome da pessoa: ').trim();

let nomeCompleto = nome.split(" ");

console.log(`O primeiro Nome é ${nomeCompleto[0]}, e o último é ${nomeCompleto[nomeCompleto.length - 1]}`);
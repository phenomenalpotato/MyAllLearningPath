const prompt = require('prompt-sync')();

const produto = prompt('Qual o valor do produto: ');

let prodFinal = (produto * 0.05);

console.log(`O valor do produto é R$${produto}, com o desconto de R$${prodFinal}. O valor final é R$${produto - prodFinal}`);
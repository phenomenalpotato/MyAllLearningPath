const prompt = require('prompt-sync')();

const {aumentar, dobro, metade} = require('./moeda.js');

let preco = Number(prompt('Digite o preço: R$ '));

console.log(`A metade de R$${preco} é R$${metade(preco).toFixed(2)}\nO dobbro de R$${preco} é R$${dobro(preco).toFixed(2)}\nAumentando 10%, temos R$${aumentar(preco, 10).toFixed(2)}`);
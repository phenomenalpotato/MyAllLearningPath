const prompt = require('prompt-sync')();

const {aumentar, dobro, metade, moeda} = require('./utilidadesCemV/moeda/moeda.js');

let preco = Number(prompt('Digite o preço: R$ '));

let precoEmReal = moeda(preco);

console.log(`A metade de ${precoEmReal} é ${metade(preco, false)}\nO dobro de ${precoEmReal} é ${dobro(preco, true)}\nAumentando 10%, temos ${aumentar(preco, 10, true)}`);
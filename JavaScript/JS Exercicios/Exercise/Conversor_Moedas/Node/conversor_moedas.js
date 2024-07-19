const prompt = require('prompt-sync')();

const dinheiroReal = prompt('Quanto tem de Reais na carteira R$: ');

let convertorDolar = dinheiroReal / 3.27

console.log(`Tem R$${dinheiroReal} na carteira com esse valor pode comprar $${convertorDolar.toLocaleString()}`);
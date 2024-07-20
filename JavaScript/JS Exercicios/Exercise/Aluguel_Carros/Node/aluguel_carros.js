const prompt = require('prompt-sync')();

const percorrido = prompt('Qual foi a quantidade percorrida do carro: ');

const diasAlugados = prompt('Quantos dias foi alugado: ');

const pagar = (60 * diasAlugados) + (0.15 * percorrido);


console.log(`Quantidade de ${percorrido}KM rodados em ${diasAlugados} dias. O total a pagar é R$${pagar}`);
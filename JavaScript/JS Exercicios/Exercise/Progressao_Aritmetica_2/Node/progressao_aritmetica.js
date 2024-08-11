const prompt = require('prompt-sync')();

let primeiroTermo = Number(prompt('Primeiro termo: '));

let razaoPa = Number(prompt('Razão da PA: '));

let cont = 0;

while (cont < 10) {

    console.log(`${primeiroTermo} -> `);

    primeiroTermo += razaoPa;

    cont++;
}

console.log('FIM');
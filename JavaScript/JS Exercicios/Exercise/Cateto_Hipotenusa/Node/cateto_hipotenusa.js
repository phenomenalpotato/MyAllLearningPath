const prompt = require('prompt-sync')();

const catetoOposto = Number(prompt('Qual o cateto Oposto do traingulo retangulo: '));

const catetoAdjacente = Number(prompt('Qual o cateto Adjacente do traingulo retangulo: '));

const hipotenusa = (catetoOposto ** 2) + (catetoAdjacente ** 2);

// console.log(hipotenusa)

const h2 = hipotenusa ** 0.5

console.log(`A Hipotenusa é ${h2.toLocaleString()}`);
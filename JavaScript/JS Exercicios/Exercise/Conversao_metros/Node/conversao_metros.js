const prompt = require('prompt-sync')();

const metros = prompt('Qual a medida em metros que quer converter: ');

let centimetros = metros * 100;

let milimetros = metros * 1000;

console.log(`O valor em metros digitado ${metros}m, conversão para Centimetros ${centimetros.toLocaleString()}cm, conversão para Milimetros ${milimetros.toLocaleString()}mm`);

// console.log(`O valor em metros digitado ${metros}m, conversão para Centimetros ${centimetros.toFixed(2)}cm, conversão para Milimetros ${milimetros.toFixed(2)}mm`);

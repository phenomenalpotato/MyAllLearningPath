const prompt = require('prompt-sync')();

const celcius = prompt('Qual a temperatura em Celcius: ');

const fahrenheit = ((celcius * 9) / 5) + 32;

console.log(`A temperatura em Celcius é ${celcius}C para Fahrenheit ${fahrenheit}F`);
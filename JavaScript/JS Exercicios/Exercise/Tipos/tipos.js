const prompt = require('prompt-sync')();

const input = prompt('Digite algo: ');

console.log(`Tipo: ${typeof(input)}`);
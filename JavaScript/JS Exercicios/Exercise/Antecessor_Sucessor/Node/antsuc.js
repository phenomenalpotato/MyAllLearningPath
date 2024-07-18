const prompt = require('prompt-sync')();

const numero = Number(prompt('Digite um número: '));

console.log(`Ò numero digitado foi ${numero}, o Antecessor foi ${numero - 1}, e o Sucessor foi ${numero + 1}`);
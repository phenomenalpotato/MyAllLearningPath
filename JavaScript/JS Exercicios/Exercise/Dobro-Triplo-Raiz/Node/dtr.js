const prompt = require('prompt-sync')();

const numero = Number(prompt(`Qual o numero: `));

console.log(`O número digitado foi ${numero}, o dobro é ${numero * 2}, o triplo é ${numero * 3}, e a raiz é ${numero ** 0.5}`);
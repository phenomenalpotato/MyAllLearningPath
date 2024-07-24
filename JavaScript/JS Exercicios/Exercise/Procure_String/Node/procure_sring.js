const prompt = require('prompt-sync')();

const nome = prompt('Qual o seu nome: ').trim();

const resulNome = nome.toUpperCase();

const p = resulNome.split(" ");

// console.log(typeof(resulNome));

console.log(`O nome tem Silva: ${p.includes('SILVA')}`);
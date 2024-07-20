const prompt = require('prompt-sync')();

const salario = Number(prompt('Qual o salario do funcionario R$: '));

let aumento = salario * 0.15;

console.log(`O salario atula do funcionario é R$${salario} aumento proposto é de R$${aumento + salario}`);
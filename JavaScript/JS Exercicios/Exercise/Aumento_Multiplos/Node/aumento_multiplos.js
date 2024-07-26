const prompt = require('prompt-sync')();

const salario = Number(prompt('Qual o salario do funcionario: '));

let aumento = 0;

if (salario > 1250) {

    aumento = (salario * 0.10) + salario;

    console.log(`O salario apos o aumento é R$${aumento.toFixed(2)}`);

} else {

    aumento = (salario * 0.15) + salario;

    console.log(`O salario apos o aumento é R$${aumento.toFixed(2)}`);
}
const prompt = require('prompt-sync')();

const valorCasa = Number(prompt('Qual o valor da casa: '));

if (valorCasa <= 0) {

    console.log(`Casa ou ta de graça ou tu errou alguma coisa.`);

    process.exit(1); // To exit the program 
}

const salario = Number(prompt('Qual o salario: '));

const tempoFinanciamento = Number(prompt('Quantos anos pretende pagar: '));

const pagMensal = valorCasa / (tempoFinanciamento * 12);

if (pagMensal > (salario * 0.30)) {

    console.log(`O emprestimo foi negado!`);

} else {

    console.log(`PARABENS! O emprestimo foi aprovado!`);
}
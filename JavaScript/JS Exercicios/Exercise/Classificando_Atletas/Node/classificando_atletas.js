const prompt = require('prompt-sync')();

const anoNascimento = Number(prompt('Qual o Ano de Nascimento do Atleta: '));

const anoAtual = new Date()

const ano = anoAtual.getFullYear();

const idadeAtleta = ano - anoNascimento;

console.log(`A idade do atleta é ${idadeAtleta} anos`);

if (idadeAtleta < 0) {

    console.log('ERRO! Idade digitada é menor que 0.');

    process.exit();

} else if (idadeAtleta <= 9) {

    console.log(`A Classificação dele é: Mirim`);

} else if (idadeAtleta <= 14) {

    console.log('A Classificação dele é: Infantil');

} else if (idadeAtleta <= 19) {

    console.log('A Classificação dele é: Junior');

} else if (idadeAtleta <= 25) {

    console.log('A Classificação dele é: Sênior');

} else {

    console.log('A Classificação dele é: Master');
}
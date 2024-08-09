const prompt = require("prompt-sync")();

const dataAtual = new Date;

const anoAtual = dataAtual.getFullYear();

let nascimentoPessoa = 0;

let idadePessoa = 0;

let quantidadeMaior = 0;

for (let cont = 1; cont <= 7; cont++) {

    nascimentoPessoa = Number(prompt(`Qual a data de nascimento da ${cont} pessoa: `));

    if (nascimentoPessoa < 0) {console.log('ERRO! Nascimento digitado é negativo! -- Error Code {1}');process.exit(1)} 

    idadePessoa = anoAtual - nascimentoPessoa;

    if (idadePessoa >= 18) {

        quantidadeMaior++;

    }

}

console.log(`${quantidadeMaior} foi a quantidade de pessoas que atingiram a Maioridade!`);

console.log(`${7 - quantidadeMaior} foi a quantidade de pessoas que ainda não atingiram a Maioridade!`)
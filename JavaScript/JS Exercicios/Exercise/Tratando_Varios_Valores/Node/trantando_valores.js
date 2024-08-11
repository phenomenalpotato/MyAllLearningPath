const prompt = require('prompt-sync')();

let valorUser = 0;

let quantidadeValores = 0;

let somaValores = 0;

while (valorUser != 999) {

    valorUser = Number(prompt('Digite um número - [999 para parar!]: '));

    somaValores += valorUser

    quantidadeValores++;

    if (valorUser == 999) {

        quantidadeValores--;

        somaValores-= valorUser;
    }

}

console.log(`A soma de todos os valores é ${somaValores}, e a quantidade de números digitados foram: ${quantidadeValores}`);
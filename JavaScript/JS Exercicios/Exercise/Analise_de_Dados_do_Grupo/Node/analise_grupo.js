const prompt = require('prompt-sync')();

let sexoUser = '';

let idadeUser = '';

let decisaoUser = '';

let quantidadePessoas = 0;

let quantidadeHomem = 0;

let quantidadeMulher = 0;

while (true) {

    console.log('----------- Cadastre uma Pessoa -----------');

    idadeUser = Number(prompt('Idade: '));

    sexoUser = prompt('Sexo [M/F]: ').trim().toUpperCase();

    while (sexoUser != 'M' && sexoUser != 'F') {

        console.log('ERRO! Digite ou M para MASCULINO ou F para Feminino.');

        sexoUser = prompt('Sexo [M/F]: ').trim().toUpperCase();
    }

    if (idadeUser > 18) {

        quantidadePessoas++;
    }

    if (sexoUser == 'M') {

        quantidadeHomem++;
    }

    if (sexoUser == 'F' && idadeUser < 20) {

        quantidadeMulher++;
    }

    console.log('-----------------------------');

    decisaoUser = prompt('Quer continuar [S/N]: ').trim().toUpperCase().charAt(0);

    while (decisaoUser != 'S' && decisaoUser != 'N') {

        console.log('ERRO! Digite S para SIM ou N para NÃO.');

        decisaoUser = prompt('Quer continuar [S/N]: ').trim().toUpperCase().charAt(0);
    }   

    if (decisaoUser == 'N') {

        break;
    }
}

console.log(`Total de pessoas com mais de 18 anos: ${quantidadePessoas}. Ao total temos ${quantidadeHomem} homem(ns) cadastrados. E temos ${quantidadeMulher} mulher(es) com menos de 20 anos.`);
const prompt = require('prompt-sync')(); 

// let pessoa = {nome: '', sexo: '', idade: 0};

let nomePessoa = '';

let idadePessoa = 0;

let sexoPessoa = 0;

let mediaIdade = 0;

let quantidadeMulher = 0;

let maiorIdadeH = 0;

let nomeHomemMaisVelho = '';

for (let cont = 1; cont <= 4; cont++) {

    console.log(`--------- ${cont}ª Pessoa --------- `);

    nomePessoa = prompt(`Qual o nome da ${cont} Pessoa: `);

    idadePessoa = Number(prompt(`Qual a idade da ${cont} Pessoa: `));

    sexoPessoa = prompt(`Quanl o sexo da ${cont} Pessoa [M/F]: `).trim().toUpperCase();

    mediaIdade += idadePessoa;

    if (idadePessoa < 20 && sexoPessoa == 'F') {

        quantidadeMulher++;
    }

    if (idadePessoa > maiorIdadeH && sexoPessoa == 'M') {

        maiorIdadeH = idadePessoa;

        nomeHomemMaisVelho = nomePessoa;

    }

}

console.log('\n');

console.log(`A média de idade do grupo é de ${mediaIdade / 4} anos`);

console.log(`O homem mais velho tem ${maiorIdadeH} anos e se chama ${nomeHomemMaisVelho}`);

console.log(`Ao todo são ${quantidadeMulher} mulhere(s) com menos de 20 anos`);
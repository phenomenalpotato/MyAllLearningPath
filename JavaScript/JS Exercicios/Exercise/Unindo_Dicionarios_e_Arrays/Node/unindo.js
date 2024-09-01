const prompt = require('prompt-sync')();

let pessoa = new Map;

let cadastroPessoa = [];

let temp = [];

let mulheres = new Array;

let media = 0;

let sexoTemp = '';

while(true) {

    pessoa.set("nome", prompt('Nome: '));

    sexoTemp = prompt('Sexo [M/F]: ').trim().toUpperCase().charAt(0);

    while (sexoTemp != 'M' && sexoTemp != 'F') {

        console.log('Erro! Responda apenas M para masculino ou F para Feminino.');

        sexoTemp = prompt('Sexo [M/F]: ').trim().toUpperCase().charAt(0);
    }

    pessoa.set("sexo", sexoTemp);

    pessoa.set("idade", Number(prompt("idade: ")));
    
    temp = Array.from(pessoa);

    cadastroPessoa.push(temp.slice());
    
    pessoa.clear();

    temp.splice(0);

    let decisaoUser = prompt('Quer continuar [S/N]: ').trim().toUpperCase().charAt(0);

    while (decisaoUser != 'S' && decisaoUser != 'N') {

        console.log('ERRO! Digite N para não ou S para sim.');

        decisaoUser = prompt('Quer continuar [S/N]: ').trim().toUpperCase().charAt(0);
    }

    if (decisaoUser == 'N') {

        break;
    }
}

console.log('-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=');

for (let [nome, sexo, idade] of cadastroPessoa) {

    media += idade[1];

    if (sexo[1] == 'F') {

        mulheres.push(nome[1]);
    }
}

media /= cadastroPessoa.length;

console.log(`A) Ao todo temos ${cadastroPessoa.length} pessoa(s) cadastrada(s).\nB) A média de idade é de ${media.toFixed(2)} anos.`);
console.log(`C) A(s) mulhere(s) cadastrada(s) foi(ram) ${mulheres}.`);
console.log('D) A Lista de(as) pessoa(s) que esta(ão) acima da média:');

for (let [array1, array2, array3] of cadastroPessoa) {

    if (array3[1] > media) {

        console.log(`   ${array1[0]} = ${array1[1]}; ${array2[0]} = ${array2[1]}; ${array3[0]} = ${array3[1]}`);
    }
}
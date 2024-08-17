const prompt = require('prompt-sync')();

const numUser1 = Number(prompt('Digite um número: '));

const numUser2 = Number(prompt('Digite outro número: '));

const numUser3 = Number(prompt('Digite mais um número: '));

const numUser4 = Number(prompt('Digite o último número: '));

let arrayNumeros = [numUser1, numUser2, numUser3, numUser4];

let quantidadeNPares = [];

let quantidadesNum9 = 0;

for (let numeros of arrayNumeros) {

    if (numeros % 2 == 0) {

        quantidadeNPares.push(numeros);
    }

    if (numeros == 9) {

        quantidadesNum9++;
    }
}

console.log(`Você digitou os valores ${arrayNumeros} - O valor 9 apareceu ${quantidadesNum9} veze(s)`);

if (arrayNumeros.indexOf(3) == -1) {

    console.log(`O valor 3 não apareceu em nenhuma posição`);

} else {

    console.log(`O valor 3 apareceu na ${(arrayNumeros.indexOf(3)) + 1}ª posição`);
}

if (quantidadeNPares.length == 0) {

    console.log(`Não foi encontrado nenhum valor Par digitado`);

} else {

    console.log(`Os valores Pares digitados foram ${quantidadeNPares}`);
}
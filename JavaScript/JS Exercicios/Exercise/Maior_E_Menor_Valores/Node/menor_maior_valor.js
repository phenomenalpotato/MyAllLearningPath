const prompt = require('prompt-sync')();

let numUser = Number(prompt('Digite um número: '));;

let decisaoUser = prompt('Quer continuar [S/N]: ').trim().toUpperCase();

let quantidadeNumeros = 1;

let somaNumeros = 0;

let mediaValores = 0;

let maiorValor = numUser;

let menorNumero = numUser;

somaNumeros += numUser;

while (decisaoUser == 'S') {

    numUser = Number(prompt('Digite um número: '));

    decisaoUser = prompt('Quer continuar [S/N]: ').trim().toUpperCase();

    if (decisaoUser != 'S' && decisaoUser != 'N') {

        while (decisaoUser != 'S' && decisaoUser != 'N') {

            console.log('ERRO! Número digitado errado! Por favor, digite ou S - Para continuar ou N - Para parar. ');

            decisaoUser = prompt('Quer continuar [S/N]: ').trim().toUpperCase();

        }
    } 

    if (numUser > maiorValor) {

        maiorValor = numUser;

    }

    if (numUser < menorNumero) {

        menorNumero = numUser;

    }

    somaNumeros += numUser;

    quantidadeNumeros++;
}

mediaValores = somaNumeros / quantidadeNumeros;

console.log(`Você digitou ${quantidadeNumeros} número(s), a média entre ele(s) foi ${mediaValores.toFixed(2)}`);

console.log(`O maior valor foi ${maiorValor} e o menor valor foi ${menorNumero}`);
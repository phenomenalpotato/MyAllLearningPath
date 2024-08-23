const prompt = require('prompt-sync')();

let arrayUser = [];

let arrayPar = [];

let arrayImpar = [];

let cont = 0;

while (true) {

    arrayUser.push(prompt('Digite um número: '));

    let decisaoUser = prompt('Quer continuar [S/N]: ').trim().toUpperCase().charAt(0);

    while (decisaoUser != 'S' && decisaoUser != 'N') {

        console.log('ERRO! Digite S para continuar e N para parar!')

        decisaoUser = prompt('Quer continuar [S/N]: ').trim().toUpperCase().charAt(0);
    }

    if (arrayUser[cont] % 2 == 0) {

        arrayPar.push(arrayUser[cont]);
    
    } else {

        arrayImpar.push(arrayUser[cont])
    }

    if (decisaoUser == 'N') {

        break;
    }

    cont++;
}

console.log(`O Array completo é ${arrayUser} - O Array de Pares é ${arrayPar} - E o Array Impar é ${arrayImpar}`);
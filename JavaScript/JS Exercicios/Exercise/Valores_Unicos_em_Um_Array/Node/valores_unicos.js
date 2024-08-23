const prompt = require('prompt-sync')();

let numAtual = 0;

let decisaoUser = ''

let realOufalso = false;

let arrayNum = [];

while (true) {

    numAtual = Number(prompt('Digite um número: '));

    if (arrayNum.length == 0) {

        arrayNum.push(numAtual);

        console.log('Valor adicionado com sucesso!');

    } else {

        for (let indices in arrayNum) {

            realOufalso = numAtual == arrayNum[indices];

            if (realOufalso) {

                console.log('Valor duplicado! Não será adicionado...');

                break;
            } 
        }

        if (!(realOufalso)) {

            arrayNum.push(numAtual);

            console.log('Valor adicionado com sucesso!');
        }
    }

    decisaoUser = prompt('Quer continuar [S/N]: ').trim().toUpperCase().charAt(0);

    while (decisaoUser != 'S' && decisaoUser != 'N') {

        console.log('ERRO! Digite S para sim e N para Não!');

        decisaoUser = prompt('Quer continuar [S/N]: ').trim().toUpperCase().charAt(0);
    }

    if (decisaoUser == 'N') {

        break;
    }
}

console.log(`Você digitou os valores ${arrayNum.toSorted((a, b) => a - b)}`);
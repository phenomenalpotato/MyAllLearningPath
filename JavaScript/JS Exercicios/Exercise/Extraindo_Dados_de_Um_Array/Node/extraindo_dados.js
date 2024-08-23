const prompt = require('prompt-sync')();

let userNum = [];

while(true) {

    let decisaoUser = '';

    userNum.push(prompt('Digite um valor: '));

    decisaoUser = prompt('Quer Continuar [S/N]: ').trim().toUpperCase().charAt(0);

    while (decisaoUser != 'S' && decisaoUser != 'N') {

        console.log('ERRO! Digite S para continuar e N para parar!');

        decisaoUser = prompt('Quer Continuar [S/N]: ').trim().toUpperCase().charAt(0);
    }

    if (decisaoUser == 'N') {

        break;
    }
}

let arrayOrganizado = userNum.toSorted((a, b) => a - b)

console.log(`Você digitou ${userNum.length} números/ elementos. Os valores em ordem decrescente são ${arrayOrganizado.reverse()}.`);

if (userNum.includes('5')) {

    console.log('O valor 5 foi encontrado!')

} else {

    console.log(`O valor 5 não foi encontrado na lista!`);
}
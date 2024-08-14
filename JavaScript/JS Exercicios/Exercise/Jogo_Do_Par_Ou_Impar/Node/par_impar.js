const prompt = require('prompt-sync')();

function getRandomInt(max = 0) {

    return Math.floor(Math.random() * max);
}

let numUser = 0;

let numComputador = 0;

let userParImpart = '';

let soma = 0;

let resultado = false;

let quantidadeVitorias = 0;

while (true) {

    console.log('---------===============-------------');

    numUser = Number(prompt('Digite um valor: '));
    
    numComputador = getRandomInt(10)

    userParImpart = prompt('Par ou Impar? [P/I]: ').trim().toUpperCase().charAt(0);

    while (userParImpart != 'P' && userParImpart != 'I') {

        console.log('ERRO! Digite PAR ou IMPAR somente!');

        userParImpart = prompt('Par ou Impar? [P/I]: ').trim().toUpperCase().charAt(0);
    }

    console.log('---------===============-------------');

    soma = numUser + numComputador;

    console.log(`Você jogou ${numUser} e o Computador ${numComputador}.`);

    if (soma % 2 == 0) {

        console.log(`Total de ${soma} - DEU PAR!`);

        if(userParImpart == 'P') {

            console.log('Você escolheu PAR e VENCEU!');
        
        } else {

            console.log('Você escoheu IMPAR e PERDEU!');

            resultado = true;
        }

    } else {

        console.log(`Total de ${soma} - DEU IMPAR!`);

        if (userParImpart == 'I') {

            console.log('Você escolheu IMPAR e VENCEU!');
        
        } else {

            console.log('Você escolheu PAR e PERDEU!');

            resultado = true;
        } 
    }

    if (resultado) {

        break;
    }

    quantidadeVitorias++;
}

console.log('---------===============-------------');

console.log(`GAME OVER! Você venceu ${quantidadeVitorias} vez(es).`);
function getRandomInt(max = 0) {

    return Math.floor(Math.random() * max);

}

const prompt = require('prompt-sync')();

let jogadaJogador = Number(prompt('Suas opções: [0] - PEDRA; [1] - PAPEL; [2] - TESOURA: '));

let jogadaMaquina = getRandomInt(3);

// const gesto = ['Pedra', 'Papel', 'Tesoura']

// console.log(gesto[jogadaMaquina], gesto[jogadaJogador]);

// setTimeout(() => {

//     console.log('Ei')

// }, 2000);

switch (jogadaMaquina) {
    
    case 0:

        jogadaMaquina = 'Pedra';

        break;
    
    case 1:

        jogadaMaquina = 'Papel';

        break;

    case 2:

        jogadaMaquina = 'Tesoura';

        break;

    default:

    console.log('ERRO! MÁQUINA ESCOLHEU FORA DAS OPÇÕES');

    process.exit();
}

switch (jogadaJogador) {

    case 0:

        jogadaJogador = 'Pedra';

        break;
    
    case 1:

        jogadaJogador = 'Papel';

        break;

    case 2:

        jogadaJogador = 'Tesoura';

        break;

    default:

        console.log('ERRO! OPÇÃO DIGITADA ESTA FORA DAS ESCOLHAS!');

        process.exit();

}


console.log(`Máquina escolheu: ${jogadaMaquina}`);

console.log(`Jogador escolheu: ${jogadaJogador}`);


if ((jogadaJogador == 'Pedra' && jogadaMaquina == 'Tesoura') || (jogadaJogador == 'Tesoura' && jogadaMaquina == 'Papel') || (jogadaJogador == 'Papel' && jogadaMaquina == 'Pedra')) {

    console.log('O JOGADOR GANHOU!')

} else if ((jogadaMaquina == 'Pedra' && jogadaJogador == 'Tesoura') || (jogadaMaquina == 'Tesoura' && jogadaJogador == 'Papel') || (jogadaMaquina == 'Papel' && jogadaJogador == 'Pedra')) {

    console.log('A MÁQUINA GANHOU!');

} else {

    console.log('EMPATE!');
}
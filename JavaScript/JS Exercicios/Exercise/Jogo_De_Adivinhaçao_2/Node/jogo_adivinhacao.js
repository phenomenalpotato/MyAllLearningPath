function getRandomInt(max = 0) {

    return Math.floor(Math.random() * max);

}

const prompt = require('prompt-sync')();

console.log('Acabei de pensar em um número entre 0 e 10. Será que você consegue adivinhar qual foi?');

let palpiteJogador = Number(prompt('Qual o seu palpite: '));

let palpiteMaquina = getRandomInt(10);

let quantidadePalpites = 1;

while (palpiteJogador != palpiteMaquina) {

    if(palpiteMaquina > palpiteJogador) {

        console.log('Dica: É um valor maior...');

    } else {

        console.log('Dica: É um valor menor...')
    }

    quantidadePalpites++;

    palpiteJogador = Number(prompt(`Errou! Tente mais uma vez: `));
}

console.log(`Parabéns! Você acertou! A Máquina escolheu o valor ${palpiteMaquina} --- Demorou ${quantidadePalpites} tentativa(s).`)
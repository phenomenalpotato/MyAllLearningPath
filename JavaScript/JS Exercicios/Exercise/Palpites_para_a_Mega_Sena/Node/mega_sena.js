const prompt = require('prompt-sync')();

function getRandomInt(max = 0) {

    return Math.floor(Math.random() * max);
}

let jogoArray = [];

let resultado = [];

console.log('JOGO NA MEGA SENA');

console.log('============================');

const quantidadeJogosUser = Number(prompt('Quantos jogos você quer que eu sorteie: '));

console.log(`-=-=-=-=-=-=- SORTEANDO ${quantidadeJogosUser} JOGOS -=-=-=-=-=-=-`);

for (let cont = 0; cont < quantidadeJogosUser; cont++) {

    for (let num = 0; num < 6; num++) {

        let numAleatorio = getRandomInt(60);

        while (jogoArray.includes(numAleatorio) || numAleatorio == 0) {
    
            numAleatorio = getRandomInt(60);
        }

        jogoArray.push(numAleatorio);
    }

    resultado.push(jogoArray.slice());

    console.log(`Jogo ${cont + 1}: ${resultado[cont].toSorted((a, b) => (a - b))}`);

    jogoArray.splice(0,6);
}
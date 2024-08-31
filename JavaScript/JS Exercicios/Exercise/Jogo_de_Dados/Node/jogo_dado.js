const lodash = require('lodash');

function getRandomInt(max = 0) {

    let resul = Math.floor(Math.random() * max);
    
    while (resul == 0) {

        resul = Math.floor(Math.random() * max);
    }

    return resul;
}

let jogadores = new Map();

let posicao = 0;

for (let cont = 1; cont <= 4; cont++) {

    jogadores.set(`jogador${cont}`, getRandomInt(7));

    console.log(`jogador${cont} tirou ${jogadores.get(`jogador${cont}`)}`);

}

console.log('-=-=-=- RANKING DOS JOGADORES -=-=-=-');

let ordemArray = new Map(lodash.sortBy(Array.from(jogadores), [(entry) => entry[1]]).reverse());

for (let resulDados of ordemArray) {

    posicao++;

    console.log(`${posicao}º lugar: ${resulDados[0]} com ${resulDados[1]}`);
}

/**
jogadores.set().get();

jogadores.has().valueOf();

let ordemArray = Array.from(jogadores.values()).toSorted((a, b) => (a - b));

console.log(ordemArray.reverse());

let proximoElemento = jogadores.values();

proximoElemento = jogadores.values();

let ar = Array.from(jogadores.keys())

console.log(ar);

let ordemArray = Array.from(jogadores.values()).toSorted((a, b) => (a - b));

console.log(jogadores, jogadores.keys(), jogadores.values(), ordemArray.reverse());
**/
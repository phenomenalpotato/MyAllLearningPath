const prompt = require('prompt-sync')();

function ficha(gols=0, nomeJogador="<desconhecido>") {

    console.log('-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=');

    if (nomeJogador == "" || /\d/g.test(nomeJogador)) {

        nomeJogador = "<desconhecido>";
    }

    if (isNaN(gols)) {

        gols = 0;
    }

    console.log(`O jogador ${nomeJogador}, fez ${gols} gol(s) no campeonato.`);
}

let nJogador = prompt('Nome Jogador: ').trim(); // Mesmo quando não escrevo noada no Input, ele aramzena uma string vazia que passa para a função
// A função com isso não usara o valor padrão, mas sim essa string vazia que foi passada para ela.

let qtdGols = Number(prompt('Número de Gols: '));

ficha(qtdGols, nJogador);

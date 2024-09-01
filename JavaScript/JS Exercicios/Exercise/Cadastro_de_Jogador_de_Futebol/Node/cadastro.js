const prompt = require('prompt-sync')();

let cadastroJogador = new Map;

let quantidadeGols = [];

let totalGols = 0;

cadastroJogador.set("nome", prompt('Nome do jogador: '));

cadastroJogador.set("quantidadePartidas", Number(prompt(`Quantas partidas ${cadastroJogador.get("nome")} jogou: `)));

for (let cont = 0; cont < cadastroJogador.get("quantidadePartidas"); cont++) {

    quantidadeGols.push(Number(prompt(`Quantos gols na partida ${cont}: `)));

    totalGols += quantidadeGols[cont];
}

cadastroJogador.set("gols", quantidadeGols.slice());

cadastroJogador.set("total", totalGols);

console.log(cadastroJogador);

console.log('-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=');

for (let [info, jogador] of cadastroJogador) {

    console.log(`O campo ${info} tem o valor ${jogador}`);
}

console.log('-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=');

console.log(`O jogador ${cadastroJogador.get("nome")} jogou ${cadastroJogador.get("quantidadePartidas")} partidas.`);

for (let [partidas, golsMarcados] of cadastroJogador.get("gols").entries()) {

    console.log(`   => Na partida ${partidas}, fez ${golsMarcados} gol(s).`);
}

console.log(`Foi um total de ${cadastroJogador.get("total")} gols.`)
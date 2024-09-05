const prompt = require('prompt-sync')();

let cadastroJogador = new Map;

let jogador = new Array;
 
let nomeJogador = '';

let totalGols = 0;

let cod = 0;

let opcaoUser = 0;

let jogadores = [];

while (true) {

    nomeJogador = prompt("Nome do Jogador: ");

    cadastroJogador.set(`partidas${nomeJogador}`, Number(prompt(`Quantas partidas ${nomeJogador} jogou: `)));

    for (let cont = 0; cont < cadastroJogador.get(`partidas${nomeJogador}`); cont++) {

        jogador.push(prompt(`   Quantos gols na partida ${cont + 1}: `));
    }

    cadastroJogador.set(nomeJogador, jogador.slice());

    jogador.splice(0);

    for (let gols of cadastroJogador.get(nomeJogador).entries()) {

            totalGols += Number(gols[1]);
    }

    cadastroJogador.set(`totalGols${nomeJogador}`, totalGols);

    totalGols = 0;

    let temp = Array.from(cadastroJogador);

    jogadores.push(temp.slice());

    cadastroJogador.clear();

    temp.splice(0);

    let decisaoUser = prompt('Quer continuar [S/N]: ').trim().toUpperCase().charAt(0);

    while(decisaoUser != 'S' && decisaoUser != 'N') {

        console.log('Erro! Digite S para continuar ou N para parar.');

        decisaoUser = prompt('Quer continuar [S/N]: ').trim().toUpperCase().charAt(0);
    }

    if (decisaoUser == 'N') {

        break;
    } 
}

console.log('-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=');

console.log('cod nome   gols    total\n-----------------------------------------------------');

for (let [partidas, nomeGols, totGoal] of jogadores) {

    if (!(partidas.includes('partidas'))) {

        process.stdout.write(`${cod}  ${nomeGols[0]}  ${nomeGols[1]}        ${totGoal[1]}     \n`);

        cod++;
    }
}

while (true) {

    console.log('-----------------------------------');

    opcaoUser = Number(prompt('Mostrar dados de qual jogador? (999 para parar): '));

    while ((opcaoUser < 0 || opcaoUser >= jogadores.length) && opcaoUser != 999) {

        console.log('ERRO! Número digitado não foi encontrado no Banco de dados!');

        opcaoUser = Number(prompt('Mostrar dados de qual jogador? (999 para parar): '));

        console.log('-----------------------------------');
    }

    if (opcaoUser == 999) {

        break;
    }

    cod = 0;

    console.log(`  -- LEVANTAMENTO DO JOGADOR ${jogadores[opcaoUser][1][0]}: `);

    for (let gol of jogadores[opcaoUser][1][1].entries()) {

        cod++;

        console.log(`   No jogo ${cod} fez ${gol[1]} gols.`);
    }
}
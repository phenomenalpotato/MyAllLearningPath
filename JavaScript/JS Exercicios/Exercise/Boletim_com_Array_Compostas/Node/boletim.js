const prompt = require('prompt-sync')();

let aluno = [];

let temp = [];

let escolhaUser = 0;

while (true) {

    temp.push(prompt('Nome: '));

    temp.push(Number(prompt('Nota 1: ')));

    temp.push(Number(prompt('Nota 2: ')));

    aluno.push(temp.slice());

    temp.splice(0, 3);

    let decisaoUser = prompt('Quer continuar [S/N]: ').trim().toUpperCase().charAt(0);

    while(decisaoUser != 'S' && decisaoUser != 'N') {

        console.log('ERRO! Digite S para continuar e N para parar!');

        decisaoUser = prompt('Quer continuar [S/N]: ').trim().toUpperCase().charAt(0);
    }

    if (decisaoUser == 'N') {

        console.log('-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-');

        break;
    }
}

console.log('No. NOME   MÉDIA');

console.log('-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-');

for(let alunos in aluno) {

    let mediaAluno = (aluno[alunos][1] + aluno[alunos][2]) / 2;

    console.log(`${alunos}   ${aluno[alunos][0]} -- ${Math.fround(mediaAluno)}`);
}

console.log('-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-');

while (true) {

    escolhaUser = Number(prompt('Mostrar notas de qual aluno? (999 interrompe): '));

    if (escolhaUser == 999) {

        break;
    
    } else if (escolhaUser >= 0 && escolhaUser < aluno.length) {

        console.log(`As notas de ${aluno[escolhaUser][0]} são ${aluno[escolhaUser][1]}, ${aluno[escolhaUser][2]}`);
    
    } else {

        console.log('ERRO! Escolha um dos alunos CADASTRADOS!');
    }

    console.log('-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-');
}
const prompt = require('prompt-sync')();

let dados = [];

let pessoas = [];

let maiorPeso = 0;

let menorPeso = 0;

while (true) {

    dados.push(prompt('Nome: '));

    dados.push(Number(prompt('Peso: ')));

    if (maiorPeso == 0 || dados[1] > maiorPeso) {

        maiorPeso = dados[1];
    } 

    if (menorPeso == 0 || dados[1] < menorPeso) {

        menorPeso = dados[1]
    }

    pessoas.push(dados.slice());

    dados.splice(0,2);

    let decisaoUser = prompt('Quer continuar [S/N]: ').trim().toUpperCase().charAt(0);

    while(decisaoUser != 'S' && decisaoUser != 'N') {

        console.log('ERRO! Digite S para continuar ou N para parar!');

        decisaoUser = prompt('Quer continuar [S/N]: ').trim().toUpperCase().charAt(0);
    }

    if(decisaoUser == 'N') {

        break;
    }
}

console.log('--------------------------------------------------');

console.log(`Ao todo, você cadastrou ${pessoas.length} pessoas.`);

for (let seres of pessoas) {

     if (seres[1] == maiorPeso) {

        process.stdout.write(`${seres[0]}, `);
    }
}

console.log(`é/são a(s) pessoa(s) mais pesado(s). Pesando: ${maiorPeso.toFixed(2)}Kg.`);

for (let humanos of pessoas) {

    if (humanos[1] == menorPeso) {

        process.stdout.write(`${humanos[0]}, `);
    }
}

console.log(`é/são a(s) pessoa(s) mais leve(s). Pesando: ${menorPeso.toFixed(2)}Kg.`);
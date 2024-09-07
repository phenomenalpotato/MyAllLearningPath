const prompt = require('prompt-sync')();

function contador(ini, fi, pass) {

    if (pass < 0) {

        pass *= -1;
    }

    console.log(`-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=\nContagem de ${ini} até ${fi} de ${pass} em ${pass}`);

    if (pass == 0) {

        console.log('ERRO! Passo digitado foi igual a 0! Programa poderia ter quebrado.');

        process.exit(1);

    } else if (ini <= fi) {

        for (; ini <= fi; ini+=pass) { 

            process.stdout.write(`${ini} `);
        }

    } else {

        for (; ini >= fi; ini-=pass) {

            process.stdout.write(`${ini} `);
        }
    }
    
    console.log('FIM!\n-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=');
}

contador(1, 10, 1);

contador(10, 0, 2);

console.log('Agora é a sua vez de personalizar a contagem!');

let inicio = Number(prompt('Inicio: '));

let fim = Number(prompt('Fim: '));

let passo = Number(prompt('Passo: '));

contador(inicio, fim, passo);
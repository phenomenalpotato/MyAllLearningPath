const prompt = require('prompt-sync')();

let expreUser = prompt('Digite a expressão: ');

let cont = 0;

for (let parenteses in expreUser) {

    if (expreUser[parenteses] == '(' || expreUser[parenteses] == ')') {

        cont++;
    }
}

if (cont % 2 != 0) {

    console.log('Expressão Inválida! Um dos parenteses foi aberto e não foi fechado ou Fechado e não aberto.');

    process.exit(2);
    
} else {

    console.log('Expressão Válida!');
}
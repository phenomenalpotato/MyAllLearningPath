const prompt = require('prompt-sync')();

let saqueUser = Number(prompt('Que valor quer sacar: R$ '));

let notas50 = 0;

let notas20 = 0;

let notas10 = 0;

let notas1 = 0;

let sobraOperacao = 0;

if (saqueUser / 50 > 1 ) {

    sobraOperacao = saqueUser % 50;

    notas50 = saqueUser / 50;

    // console.log(`Serão ${Math.floor(notas50)} notas de R$50. Resta ${sobraOperacao}`);

    console.log(`Serão ${Math.floor(notas50)} notas de R$50.`);
}

if (sobraOperacao >= 20) {

    notas20 = sobraOperacao / 20;

    // console.log(`Serão ${Math.floor(notas20)} notas de R$20. Resta ${sobraOperacao % 20}`);

    console.log(`Serão ${Math.floor(notas20)} notas de R$20.`);

    sobraOperacao = sobraOperacao % 20;
}

if (sobraOperacao >= 10) {

    notas10 = sobraOperacao / 10;

    // console.log(`Serão ${Math.floor(notas10)} notas de R$10. Resta ${sobraOperacao % 10}`);

    console.log(`Serão ${Math.floor(notas10)} notas de R$10.`);

    sobraOperacao = sobraOperacao % 10;

} 

if (sobraOperacao >= 1) {

    notas1 = sobraOperacao / 1;

    // console.log(`Serão ${Math.floor(notas1)} notas de R$1. Resta ${sobraOperacao % 1}`);

    console.log(`Serão ${Math.floor(notas1)} notas de R$1.`);
}

console.log('Volte Sempre, ao Banco LSC! Tenha um bom dia!');

console.log('--------------------==============================');

// ================================================================= Correção com o WHILE -> 

let total = saqueUser;

let cedula = 50;

let totalCedulo = 0;

while (true) {

    if (total >= cedula) {

        total -= cedula

        totalCedulo++;
    
    } else {

        if(totalCedulo > 0) {

            console.log(`Total de ${totalCedulo} cédulas de R$${cedula}`);
        }

        if (cedula == 50) {

            cedula = 20;
        
        } else if (cedula == 20) {

            cedula = 10;
        
        } else if (cedula == 10) {

            cedula = 1;
        } 

        totalCedulo = 0;

        if (total == 0) {

            break
        }
    }
}
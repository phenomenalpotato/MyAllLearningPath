const prompt = require('prompt-sync')();

let maiorPeso = 0;

let pesoPessoa = 0;

let menorPeso = 0;

// pesoPessoa = Number(prompt(`Qual é o peso da 1 pessoa: `));

// let menorPeso = pesoPessoa;

// for (let cont = 2; cont <= 5; cont++) {

//     pesoPessoa = Number(prompt(`Qual é o peso da ${cont} pessoa: `));

//     if (pesoPessoa > maiorPeso){

//         maiorPeso = pesoPessoa;

//     } 
    
//     if (pesoPessoa < menorPeso) {

//         menorPeso = pesoPessoa; 
//     }

// }

for (let cont = 1; cont <= 5; cont++) {

    pesoPessoa = Number(prompt(`Qual é o peso da ${cont} pessoa: `));

    if (pesoPessoa < 0) {console.log('ERRO! Peso digitado é negativo'); process.exit();}

    if (cont == 1) {

        menorPeso = pesoPessoa

    } else {

        if (pesoPessoa > maiorPeso) {

            maiorPeso = pesoPessoa;
        }

        if (pesoPessoa < menorPeso) {
            
            menorPeso = pesoPessoa;
        }
    }
}

console.log(`O Maior peso entre as 5 pessoas foi ${maiorPeso}Kg -- E o menor foi ${menorPeso}Kg`);
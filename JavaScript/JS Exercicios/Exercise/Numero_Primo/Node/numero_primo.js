const prompt = require('prompt-sync')();

let numUser = Number(prompt('Digite um número: '));

let qtd = 0;

if(numUser % 2 == 0 || numUser == 1) {

    console.log(`O Número ${numUser} não é primo!`);

    process.exit();

}

for(let cont = 1; cont <= numUser; cont+=2) {

    if(numUser % 1 == 0 && numUser % cont == 0) {
        
        console.log(`Dividindo por ${cont} ---- Resto --- ${numUser % numUser}`)

        qtd++;
    }

    if (qtd > 2) {

        console.log(`O Número ${numUser} não é primo!`);

        process.exit();
        
    }

}

console.log(`O Número ${numUser} é primo!`)
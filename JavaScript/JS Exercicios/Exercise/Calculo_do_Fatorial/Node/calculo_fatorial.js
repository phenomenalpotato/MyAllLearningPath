const prompt = require('prompt-sync')();

let numUser = Number(prompt('Calcular o seu fatorial: '))

let multiFatorial = numUser;

console.log(`Calculando ${numUser}!`);

// while (numUser > 1) {

//     numUser--;

//     multiFatorial = numUser * multiFatorial; 

// }

for (let cont = 1; cont != numUser;) {

    numUser--;

    multiFatorial = numUser * multiFatorial; 

}

console.log(`Fatorial = ${multiFatorial}`);
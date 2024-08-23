const prompt = require('prompt-sync')();

let arrayNumeros = [];

let menor = false;

let maior = false;

let numeros = 0;

for (let cont = 0; cont < 5; cont++) {

    let numUser = Number(prompt('Digite um valor: '))

    if (arrayNumeros.length == 0) {

        arrayNumeros.push(numUser);

        console.log('Adicionado ao final do Array...');
    
    } else {

        for (numeros in arrayNumeros) {

            if (numUser < arrayNumeros[numeros]) {

                menor = true;

                break;
            } 
        }

        if (!(menor)) {

            maior = true;
        }

        if (maior) {

            arrayNumeros.push(numUser);

            console.log(`Adicionado na posição final do Array...`);

            maior = false;
        }

        if (menor) {

            arrayNumeros.splice(Number(numeros), 0, numUser);
        
            console.log(`Adicionado na posição ${numeros} do Array...`);

            menor = false;
        }
    } 
}

console.log(`Os valores digitados em ordem foram: ${arrayNumeros}`);
const prompt = require('prompt-sync')();

let arrayUser = [];

let maiorNumero = 0;

let menorNumero = 0;

for (let cont = 0; cont < 5; cont++) {

    arrayUser.push(Number(prompt(`Digite um valor para a posição ${cont}: `)));

    if (cont == 4) {

        console.log('------------------------------------------------');

        maiorNumero = Math.max(...arrayUser)

        menorNumero = Math.min(...arrayUser)

        process.stdout.write(`O maior valor digitado foi ${maiorNumero} na(s) posição(ções): `);

        for(let maiorN in arrayUser) {

            if (arrayUser[maiorN] == maiorNumero) {

                process.stdout.write(`${maiorN}... `);
            }
        } 
        
        process.stdout.write('\n')

        process.stdout.write(`O menor valor digitado foi ${menorNumero} na(s) posição(ções): `);

        for (let menorN in arrayUser) {

            if (arrayUser[menorN] == menorNumero) {

                process.stdout.write(`${menorN}... `);
            }
        }
    }
}

process.stdout.write('\n');

console.log(`Você digitou os valores ${arrayUser}`);
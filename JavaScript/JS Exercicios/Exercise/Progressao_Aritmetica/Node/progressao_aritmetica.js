const prompt = require('prompt-sync')();

let numPrimeiraTermo = Number(prompt('Qual o primeiro termo da PA: '));

const numRazao = Number(prompt('Qual a Razao da PA: '));

for (let cont = 0; cont < 10; cont++) {

    console.log(`${numPrimeiraTermo}`);

    numPrimeiraTermo += numRazao;

}


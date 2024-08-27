const prompt = require('prompt-sync')();

let matrizArray = [[], [], []];

for (let x = 0; x < 3; x++) {

    for (let y = 0; y < 3; y++) {

        matrizArray[x][y] = Number(prompt(`Digite um valor para ${[x,y]}: `))
    }
}

console.log('-------------------------------------------');

for (let numeros of matrizArray) {

    console.log(`[${numeros}]`);
}
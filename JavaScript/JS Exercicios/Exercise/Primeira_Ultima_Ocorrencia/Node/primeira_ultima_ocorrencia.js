const prompt = require('prompt-sync')();

const letras = prompt('Escreva uma Frase: ');

const formatLetras = letras.toUpperCase().trim();

const vetorLetras = [formatLetras];

let veriLetras = [];

let verificar = '';

for(let c = 0; c < vetorLetras[0].length; c++) {

    verificar = vetorLetras[0][c].includes('A');

    if(verificar == true) {

        veriLetras.push(vetorLetras[0][c]);

    }
}

console.log(`A quantidade de aparições da letra A é de ${veriLetras.length}. A primeira aparição da letra A é ${formatLetras.indexOf('A')+1}. E a ultima aparição da letra foi ${formatLetras.lastIndexOf('A')+1}`);
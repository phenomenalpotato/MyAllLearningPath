const prompt = require('prompt-sync')();

const numero = prompt('Qual o numero entre 0 a 9999: ');

const valorNum = numero.slice();

const numVer = valorNum.length;

if(numVer == 1) {

    console.log(`Numero digitado é ${valorNum}, ele separado: Unidade: ${valorNum[0]}`);

} else if(numVer == 2) {

    console.log(`Numero digitado é ${valorNum}, ele separado: Unidade: ${valorNum[1]}, Dezena: ${valorNum[0]}`);

} else if (numVer == 3) {

    console.log(`Numero digitado é ${valorNum}, ele separado: Unidade: ${valorNum[2]}, Dezena: ${valorNum[1]}, Centena: ${valorNum[0]}`);    

} else if (numVer == 4) {

    console.log(`Numero digitado é ${valorNum}, ele separado: Unidade: ${valorNum[3]}, Dezena: ${valorNum[2]}, Centena: ${valorNum[1]}, Milhar: ${valorNum[0]} `);

} else {

    console.log(`INVALIDO! Numero ${numero} é menor que 0 ou maior que 9999`);
}
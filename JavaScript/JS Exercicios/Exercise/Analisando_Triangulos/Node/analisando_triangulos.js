const prompt = require('prompt-sync')();

const retaA = Number(prompt('Qual o comprimento da Reta A: '));

const retaB = Number(prompt('Qual o comprimento da Reta B: '));

const retaC = Number(prompt('Qual o comprimento da Reta C: '));

let retasVetor = [retaA, retaB, retaC].toSorted((a, b) => (a - b));

let isTriangulo = (retasVetor[0] + retasVetor[1]) > retasVetor[2];

if (isTriangulo) {

    console.log(`As retas ${retasVetor} podem formar um Triangulo!`);
    
} else {

    console.log('As retas NÃO podem formar um Triangulo!');

}
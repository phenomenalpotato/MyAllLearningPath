const prompt = require('prompt-sync')();

const notaA = Number(prompt('Qual a média da primeira Nota: '));

const notaaB = Number(prompt('Qual a media da segunda Nota: '));

let media = (notaA + notaaB) / 2;

console.log(`O Aluno tirou ${notaA} na primeira nota, e ${notaaB} na segunda nota. A média dele é ${media}`)
function getRandomInt(max) {

    return Math.floor(Math.random() * max);
}

const prompt = require('prompt-sync')();

const numAluno = prompt('Qual é o primerio Aluno: ');

const numAluno2 = prompt('Qual é o segundo Aluno: ');

const numAluno3 = prompt('Qual é o terceiro Aluno: ');

const numAluno4 = prompt('Qual é o quarto Aluno: ');

const resultado = getRandomInt(4);

console.log(resultado);

if (resultado == 0) {

    console.log(`O Aluno escolhido para limpar o quadro é o: Primeiro - ${numAluno}`);

} else if (resultado == 1) {

    console.log(`O Aluno escolhido para limpar o quadro é o: Segundo - ${numAluno2}`);

} else if (resultado == 2) {

    console.log(`O Aluno escolhido para limpar o quadro é o: Terceiro - ${numAluno3}`);

} else {

    console.log(`O Aluno escolhido para limpar o quadro é o: Quarto - ${numAluno4}`);

}


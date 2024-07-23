import arrayShuffle from 'array-shuffle';

import PromptSync from 'prompt-sync';

const prompt = PromptSync();

const primeiroAluno = prompt('Qual o nome do primerio aluno: ');

const segundoAluno = prompt('Qual o nome do segundo aluno: ');

const terceiroAluno = prompt('Qual o nome do terceiro aluno: ');

const quartoAluno = prompt('Qual o nome do quarto aluno: ');

const lista = [primeiroAluno, segundoAluno, terceiroAluno, quartoAluno];

console.log(`A ordem de Apresentação é: ${arrayShuffle(lista)}`);
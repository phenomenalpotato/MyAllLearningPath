const prompt = require('prompt-sync')();

const nota1 = Number(prompt('Qual a primeira media do Aluno: '));

const nota2 = Number(prompt('Qual a segunda media do Aluno: '));

const media = (nota1 + nota2) / 2;

if (media > 10 || media < 0) {

    console.log('ERRO! Media maior que 10 ou menor que 0');

} else if (media >= 7) {

    console.log(`APROVADO! A media do Aluno foi ${media.toFixed(2)}`);

} else if (media >= 5) {

    console.log(`RECUPERAÇÃO! A media do Aluno foi ${media.toFixed(2)}`);

} else {

    console.log(`REPROVADO! A media do Aluno foi ${media.toFixed(2)}`);
}
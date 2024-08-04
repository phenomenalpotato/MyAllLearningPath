const prompt = require('prompt-sync')();

const anoNascimento = prompt('Qual o ano de Nascimento: ');

const sexo = prompt('Qual o seu sexo - M OU F: ');

const anoAtual = new Date();

const ano = anoAtual.getFullYear();

const idade = ano - anoNascimento;

const tempoAlistamento = 18 - idade;


console.log(`Quem nasceu em ${anoNascimento}, tem ${idade} Anos, em ${ano}`);

if (sexo.toLocaleUpperCase() == 'F') {

    console.log(`DISPENSADA! É do sexo Feminino. O serviço militar não é obrigatório! `);

} else if (idade > 18 && sexo.toLocaleUpperCase() == 'M') {

    console.log(`${idade} Anos - É idade para alistar! Você deveria ter se alistado há ${Math.abs(tempoAlistamento)} Anos.`); 

    console.log(`Seu alistamento foi em ${ano - Math.abs(tempoAlistamento)}`); 

} else if (idade < 18 && sexo.toLocaleUpperCase() == 'M') {

    console.log(`Ainda faltam ${tempoAlistamento} Ano(s) para o alistamento. Seu alistamento será em ${tempoAlistamento + ano}.`)

} else if (idade == 18 && sexo.toLocaleUpperCase() == 'M') {

    console.log(`Quem Nasceu em ${anoNascimento}, tem ${idade} Anos, em ${ano}. Tem que se alistar IMEDIATAMENTE!`);

} else {

    console.log('Erro! Valor digitado errado no campo SEXO!');
}
const prompt = require('prompt-sync')();

let ano = prompt('Qual é o ano (Digite 0 para pegar o ano atual): ');

const anoAtual = new Date();

if (ano == 0) {

    ano = anoAtual.getFullYear();

}

if (ano % 4 == 0 && ano % 100 != 0 || ano % 400 == 0) {

    console.log(`O ano ${ano} é Bissexto!`);

} else {

    console.log(`O ano ${ano} não é Bissexto!`)
}
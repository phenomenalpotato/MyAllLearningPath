const prompt = require('prompt-sync')();

const cidade = prompt('Qual o nome da Cidade: ');

const cidadeResult = cidade.toUpperCase().trim();

const cidadeVer = cidadeResult.startsWith("SANTO");

console.log(`O nome da Cidade digitado tem o nome de: ${cidadeVer}`);
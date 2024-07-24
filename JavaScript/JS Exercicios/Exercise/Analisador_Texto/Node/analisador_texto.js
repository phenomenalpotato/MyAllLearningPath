const prompt = require('prompt-sync')();

const nome = prompt('Qual o nome Completo: ').trim();

console.log(`O nome com todas as letras maiusculas: ${nome.toUpperCase()}, com todas as letras minusculas: ${nome.toLowerCase()}, tem um total de ${nome.replace(/ /g, "").length} letras sem contar espaço, E tem ${nome.split(" ")[0].length} letras no primeiro nome.`);
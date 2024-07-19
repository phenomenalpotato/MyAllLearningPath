const prompt = require('prompt-sync')();

const largura = prompt('Qual a Largura da parede: ');

const altura = prompt('Qual a altura da parede: ');

let areaParede = largura * altura;

let litrosTinta = areaParede / 2;

console.log(`Será necessário ${litrosTinta} Litros de tinta para pintar a parede`);
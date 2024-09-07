const prompt = require('prompt-sync')();

function area(lar, com) {

    return (lar * com).toFixed(1);
}

console.log('\nControle de Terreno\n---------------------------');

let largura = Number(prompt('Largura (m): '));

let comprimento = Number(prompt('Comprimento (m): '));

console.log(`A área de um terreno ${largura.toFixed(1)} x ${comprimento.toFixed(1)} é de ${area(largura, comprimento)}m².`);
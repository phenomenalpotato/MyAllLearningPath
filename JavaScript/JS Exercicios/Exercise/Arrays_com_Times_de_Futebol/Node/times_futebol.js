const prompt = require('prompt-sync')();

let timesFutebol = ['Botafogo', 'Fortaleza', 'Flamengo', 'Palmeiras', 'São Paulo', 'Cruzeiro', 'Bahia', 'Athlético-PR', 'Atlético-MG', 'Vasco', 
    'Bragantino', 'Internacional', 'Juventude', 'Grêmio', 'Criciúma', 'Vitória', 'Corinthians', 'Fluminense', 'Cuiabá', 'Atlético-GO'];


console.log('-----------================');

for (let times in timesFutebol) {

    console.log(`A classificação dos times do Brasileirão Serie A - 2024 é: ${Number(times) + 1}ª - ${timesFutebol[times]} `);
}

console.log('-----------================');

console.log(`Os 5 Primeiros são: ${timesFutebol.slice(0, 5)}`);

console.log('-----------================');

console.log(`Os últimos 4 são: ${timesFutebol.slice((timesFutebol.length - 4))}`);

console.log('-----------================');

console.log(`Times em ordem alfabética: ${timesFutebol.toSorted((a, b) => a.localeCompare(b))}`);

console.log('-----------================');

console.log(`O Juventude está na ${(timesFutebol.indexOf('Juventude')) + 1}ª posição.`);
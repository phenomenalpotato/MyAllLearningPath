const prompt = require('prompt-sync')();

const viagem = Number(prompt('Qual a distancia da viagem em Km/h: '));

let preco = 0;

if (viagem >= 0 && viagem <= 200) {

    preco = 0.50 * viagem;

    console.log(`O preço da viagem será de R$${preco}`);
    
} else if (viagem < 0) {

    console.log('ERRO! valor negativo!');

} else {

    preco = viagem * 0.45;

    console.log(`O preço para viajens mais longas que 200Km/h será de R$${preco} `);
}
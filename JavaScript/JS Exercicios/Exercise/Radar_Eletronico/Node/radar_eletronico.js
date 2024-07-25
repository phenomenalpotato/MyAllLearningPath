const prompt = require('prompt-sync')();

const velocidade = Number(prompt('Qual a velocidade do veiculo: '));

if (velocidade >= 80) {

    const multa = (velocidade - 80) * 7;

    console.log(`MULTADO! Você estava a ${velocidade}Km/h em uma pista de 80Km/h. Será multado em R$${multa}`);

} else {

    console.log(`Dirigindo a ${velocidade}Km/h, não será multado!`)
}
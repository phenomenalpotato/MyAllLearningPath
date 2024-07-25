function getRandomInt(max = 0) {

    return Math.floor(Math.random() * max);

}

const prompt = require('prompt-sync')();

const numero = prompt('Qual o numero: ');

const numPC = getRandomInt(5)

if (numero == numPC) {

    console.log(`ACERTOU! o numero digitado é ${numero} e o do PC foi ${numPC}`);

} else {

    console.log(`ERROUUUU! O numero digitado é ${numero} e o do PC foi ${numPC}`);
}
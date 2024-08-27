const prompt = require('prompt-sync')();

let matrizArray = [[], [], []];

let somaPares = 0;

let somaTerceiraColuna = 0;

let maiorValorSegundaLinha = 0;

for (let x = 0; x < 3; x++) {

    for (let y = 0; y < 3; y++) {

        matrizArray[x][y] = Number(prompt(`Digite um valor para ${[x,y]}: `));

        if (matrizArray[x][y] % 2 == 0) {

            somaPares += matrizArray[x][y];
        }

        if (matrizArray[1][y] > maiorValorSegundaLinha) {

            maiorValorSegundaLinha = matrizArray[1][y];
        }
    }
}

console.log('-------------------------------------------');

for (let linhas of matrizArray) {

    console.log(`[${linhas}]`);

    somaTerceiraColuna += linhas[2];
}

console.log('-------------------------------------------');

console.log(`A soma dos valores pares é ${somaPares}. -- \nA soma dos valores da terceira coluna é ${somaTerceiraColuna}. -- \nO maior valor da segunda linha é ${maiorValorSegundaLinha}.`);
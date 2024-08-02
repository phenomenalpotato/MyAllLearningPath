const prompt = require('prompt-sync')();

const numValor = Number(prompt("Qual o número que quer converter em binário, octal e hexadecimal: "));

let binario = numValor;

let restoDiv = 0;

let resulBin = [];

while (binario > 1) {

    restoDiv = binario % 2;

    // console.log(`O Dividendo agora é ${binario} --------- Esse é o quociente da divisão ${Math.floor(binario / 2)} -------- Esse é o resto da divisão ${restoDiv}`);

    resulBin.push(restoDiv);

    binario = Math.floor(binario / 2);

}

console.log(`O numero decimal ${numValor} convertido em binário é 1,${resulBin.toReversed()}`);
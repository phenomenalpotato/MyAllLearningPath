const prompt = require('prompt-sync')();

let numUser = 0;

while (true) {

    numUser = Number(prompt('Quer ver a tabuada de qual valor: '));

    if (numUser < 0) {

        break;
    }

    for (let cont = 1; cont <= 10; cont++) {

        console.log(`${numUser} X ${cont} = ${numUser * cont}`);

    }

    console.log('-----------==========----------------');
}

console.log('Programa Encerrado. Volte Sempre!');
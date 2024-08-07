const prompt = require('prompt-sync')();

const numUser = prompt('Qual o numero quer a tabuada: ');

console.log(`A tabuada do ${numUser} é: `);

for (let cont = 1; cont <= 10; cont++) {

    console.log(`${numUser} X ${cont} = ${numUser * cont}`);

}
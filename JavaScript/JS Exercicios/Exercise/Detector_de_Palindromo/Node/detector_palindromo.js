const prompt = require('prompt-sync')();

let palavraUser = prompt('Escreva uma frase ou palavra: ').trim().toUpperCase().replace(/ /g, "");

let newPalavraUser = palavraUser.replace(/,/g, "").replace(/-/g, "");

let transToArray = [];
 
for (const element of newPalavraUser) {

    transToArray.push(element);

}

let palavraReversa = transToArray.toReversed();

let detector = newPalavraUser == palavraReversa.toString().replace(/,/g, "").replace(/-/g, "");

console.log(`O inverso de ${palavraUser} é == ${palavraReversa.toString().replace(/,/g, "").replace(/-/g, "")}`)

if(detector) {

    console.log('A frase ou palavra é um Palíndromo!')

} else {

    console.log(`A frase digitada não é um Palíndromo!`);

}

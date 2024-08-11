const prompt = require('prompt-sync')();

let primeiroTermo = Number(prompt('Qual o Primeiro Termo: '));

let razaoPa = Number(prompt('Qual a Razão: '));

let cont = 10;

let quantidadeTermos = 0;

while (cont > 0) { // Espera um verdairo

    console.log(`${primeiroTermo} -> `);

    primeiroTermo += razaoPa;
    
    cont--;

    quantidadeTermos++;

    if (cont < 1) { // espera um verdadeiro

        cont = prompt('Quantos termos você quer mostrar a mais: ')
        
    } 
}

console.log(`Progressão finalizada com ${quantidadeTermos} termo(s) mostrado(s).`);
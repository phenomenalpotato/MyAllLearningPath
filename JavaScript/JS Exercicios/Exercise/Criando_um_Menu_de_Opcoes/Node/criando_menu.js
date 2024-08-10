const prompt = require('prompt-sync')();

let primeiroValorUser = Number(prompt('Qual o primeiro valor: '));

let segundoValorUser = Number(prompt('Qual o segundo valor: '));

let opcaoSelecionadaUser = Number(prompt('Digite uma das Opções a seguir: [ 1 ] - Somar; [ 2 ] - Multiplicar; [ 3 ] - Maior; [ 4 ] - Novos Números; [ 5 ] - Sair do Programa: '));

console.log('----------------==========-------------------');

while (opcaoSelecionadaUser != 5) {

    console.log('----------------==========-------------------');

    switch (opcaoSelecionadaUser) {

        case 1:

            console.log(`A Soma entre ${primeiroValorUser} + ${segundoValorUser} é ${primeiroValorUser + segundoValorUser}`);

            break;

        case 2:

            console.log(`A Multiplicação entre ${primeiroValorUser} X ${segundoValorUser} é ${primeiroValorUser * segundoValorUser}`);

            break;

        case 3:

            if (primeiroValorUser > segundoValorUser) {

                console.log(`O Primeiro valor ${primeiroValorUser} é maior que o Segundo valor ${segundoValorUser}`);
            
            } else if (primeiroValorUser == segundoValorUser) {

                console.log(`Os dois valores ${primeiroValorUser} e ${segundoValorUser} são iguais.`)
            } 
            
            else {

                console.log(`O Segundo valor ${segundoValorUser} é maior que o Primeiro valor ${primeiroValorUser}`);
            }

            break;
            
        case 4:
        
            primeiroValorUser = Number(prompt('Qual o primeiro valor: '));

            segundoValorUser = Number(prompt('Qual o segundo valor: '));

            break;

        default:

            console.log('ERRO! Número digitado inválido! Tente novamente, com umas das opções no menu.');
    }

    console.log('----------------==========-------------------');


    opcaoSelecionadaUser = Number(prompt('Digite uma das Opções a seguir: [ 1 ] - Somar; [ 2 ] - Multiplicar; [ 3 ] - Maior; [ 4 ] - Novos Números; [ 5 ] - Sair do Programa: '));

}

console.log('Muito obrigado por participar do Jogo! Tenha um bom dia!');
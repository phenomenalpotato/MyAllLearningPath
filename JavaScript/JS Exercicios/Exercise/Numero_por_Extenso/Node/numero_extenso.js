const prompt = require('prompt-sync')();

let numUser = 0;

let resulArray = ['Zero', 'Um', 'Dois', 'Três', 'Quatro', 'Cinco', 'Seis', 'Sete', 'Oito', 'Nove', 'Dez', 'Onze', 'Doze', 'Treze', 'Quartoze', 
    'Quinze', 'Dezesseis', 'Dezessete', 'Dezoito', 'Dezenove', 'Vinte'];

let decisaoUser = '';

while(true) {

    numUser = Number(prompt('Digite um número entro 0 e 20: '));

    if (numUser < 0 || numUser > 20) {

        console.log('ERRO! Digite um número entre 0 e 20');

        } else {

            console.log(`Você digitou o número ${resulArray[numUser]}`);

            decisaoUser = prompt('Deseja continuar [S/N]: ').trim().toUpperCase().charAt(0);

            if (decisaoUser == 'N') {

                break;            
            } 
        }
}
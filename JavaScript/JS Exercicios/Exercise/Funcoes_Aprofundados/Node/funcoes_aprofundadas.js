const prompt = require('prompt-sync')();

function leiaInt(msg) {

    try {

        // let num = prompt(msg).trim();

        while(true) {

            if (num.length == 0) {
    
                console.error(`ERRO! Por favor, digite um número inteiro válido.`);
        
                num = prompt(msg).trim();
            
            } else {
    
                num = Number(num);
        
                if (isNaN(num) || !(Number.isInteger(num))) {
            
                    console.error(`ERRO! Por favor, digite um número inteiro válido.`);
            
                    num = prompt(msg);
                
                } else {
    
                    break;
                }
            } 
        }

        return num;
    }

    catch (erro) {
    
        console.info(`O usuário decidiu não contiuar com o programa.`);    
    }
}

function leiaFlot(msg) {

    try {

        let num = prompt(msg).trim();

        while (true) {

            if (num.length == 0) {

                console.error('ERRO! Por favor, digite um número real válido.');

                num = prompt(msg).trim()
            
            } else {

                num = Number(num);

                if (isNaN(num)) {
        
                    console.error('ERRO! Por favor, digite um número real válido.');
        
                    num = prompt(msg);
                
                } else {

                    break;
                }
            }
        }

        return num;

    } catch (erro) {

        console.info("O usuário decidiu não continuar com o programa.");
    }
}

let valorInt = leiaInt('Digite um número Inteiro: ');

let valorFloat = leiaFlot('Digite um número Real: ');

console.log(`O valor Inteiro digitado foi ${valorInt} e o valor Real foi ${valorFloat}`);

module.exports = {leiaInt, leiaFlot};
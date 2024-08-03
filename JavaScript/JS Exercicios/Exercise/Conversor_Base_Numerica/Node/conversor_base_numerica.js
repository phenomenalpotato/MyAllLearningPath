const prompt = require('prompt-sync')();

const opcao = Number(prompt("Digite: 1 - Para converter a Binário; 2 - Para converter a Octal; 3 - Para converter a Hexadecimal: "));

switch (opcao) {

    case 1: {

        const numValor = Number(prompt("Qual o número que quer converter ou Binário: "));

        let binario = numValor;

        let restoDivBin = 0;

        let resulBin = [];

        

        while (binario > 1) {

            restoDivBin = binario % 2; 
        
            // console.log(`O Dividendo agora é ${binario} --------- Esse é o quociente da divisão ${Math.floor(binario / 2)} -------- Esse é o resto da divisão ${restoDiv}`);
        
            resulBin.push(restoDivBin); 
        
            binario = Math.floor(binario / 2);
        
        }

        console.log(`O número decimal ${numValor} convertido em Binário é 1${resulBin.toReversed().toString().replace(/,/g, '')}`);

        break; 
    }

    case 2: {

        const numValor = Number(prompt("Qual o número que quer converter Octal: "));

        let octal = numValor;

        let restoDivOct = 0;

        let resulOcta = [];

        if (octal < 8) {

            resulOcta.push(octal);
        
        } else {
        
            while (octal > 8) {
        
                restoDivOct = octal % 8;
        
                // console.log(`Número octal ${octal} ----- Resto ${restoDivOct}`);
        
                resulOcta.push(restoDivOct);
        
                octal = Math.floor(octal / 8);
        
            } 
        
            restoDivOct = octal % 8;
        
            resulOcta.push(restoDivOct);
        
        }

        console.log(`E convertido para Octal é ${resulOcta.toReversed().toString().replace(/,/g, '')}`);

        break;
    }

    case 3: {

        const numValor = Number(prompt("Qual o número que quer converter Hexadecimal: "));

        let hexa = numValor;

        let restoDivHexa = 0;

        let resulHexa = [];

        if (hexa <= 15) {


            if(hexa == 10) {
        
                hexa = 'A'
        
            }
        
            if(hexa == 11) {
        
                hexa = 'B'
            }
        
            if(hexa == 12) {
        
                hexa = 'C'
            }
        
            if(hexa == 13) {
        
                hexa = 'D'
            }
        
            if(hexa == 14) {
        
                hexa = 'E'
            }
        
            if(hexa == 15) {
        
                hexa = 'F'
            }
        
            resulHexa.push(hexa);
        
        } else {
        
            while(hexa > 0) {
        
            restoDivHexa = hexa % 16;
        
            if(restoDivHexa == 10) {
        
                restoDivHexa = 'A'
        
            }
        
            if(restoDivHexa == 11) {
        
                restoDivHexa = 'B'
            }
        
            if(restoDivHexa == 12) {
        
                restoDivHexa = 'C'
            }
        
            if(restoDivHexa == 13) {
        
                restoDivHexa = 'D'
            }
        
            if(restoDivHexa == 14) {
        
                restoDivHexa = 'E'
            }
        
            if(restoDivHexa == 15) {
        
                restoDivHexa = 'F'
            }
        
            resulHexa.push(restoDivHexa);
        
            hexa = Math.floor(hexa / 16);
        
            }
        }
    

    console.log(`E convertido para Hexadecimal é ${resulHexa.toReversed().toString().replace(/,/g, '')}`);

    break;

}

    default:
        
        console.log('ERRO! Escolha uma das opções de 1-3!')

}

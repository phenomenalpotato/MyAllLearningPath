/**
 * fatorial é uma função para fazer o fatorial de um número.
 * @param {Number} num - Valor do tipo Number
 * @param {Boolean} show - Valor do tipo bool
 * @return {String} - Uma String se o argumento show for verdade. Um valor number se o argumento show for falso
 */

function fatorial (num, show=false) {

    let somaFatorial = num; 

    let fatorialMostra = num.toString();

    do  {

        somaFatorial *= --num; 

        fatorialMostra += " x " + num.toString();
    
    } while (num > 1)

    if (show) { 

        fatorialMostra += " = " + somaFatorial.toString();

        return fatorialMostra;
    
    } else {

        return somaFatorial;
    }
}

console.log(fatorial(5, true));

// console.log(fatorial(3));
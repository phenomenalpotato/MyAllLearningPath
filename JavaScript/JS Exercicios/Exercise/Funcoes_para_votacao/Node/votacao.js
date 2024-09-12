const prompt = require('prompt-sync')();

let idade = 0;

function voto (anoNasc) {

    let ano = new Date;
    
    idade = ano.getFullYear() - anoNasc;
    
    if (idade  < 16) { 

        return "NEGADO";
    
    } else if (idade < 18 || idade >= 70) { 

        return "OPCIONAL";
    
    } else {

        return "OBRIGATÓRIO";
    } 
}

console.log(`-------------------------------`);

let anoNascimento = Number(prompt('Em que ano você nasceu? '));

console.log(`O voto é ${voto(anoNascimento)} para pessoas com ${idade} anos!`);

// let dec = voto(anoNascimento);

// console.log(`Com ${idade} anos: O VOTO É ${dec}`);
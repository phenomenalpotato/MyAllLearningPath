var data = new Date();

var diaSemana = data.getDay();

/* 

No JS os dias da semana são:

    0 == Domingo
    1 == Segunda
    2 == Terça
    3 == Quarta
    4 == Quinta 
    5 == Sexta
    6 == Sabado

*/

// console.log(`Hoje é: ${diaSemana}`);

switch(diaSemana) {

    case 0:
        console.log('Hoje é Domingo');
        break
    
    case 1:
        console.log('Hoje é Segunda');
        break
    
    case 2:
        console.log('Hoje é Terça');
        break
    
    case 3:
        console.log('Hoje é Quarta');
        break;

    case 4:
        console.log('Hoje é Quinta');
        break

    case 5:
        console.log('Hoje é Sexta');
        break

    case 6:
        console.log('Hoje é Sabado')
        break

    default:
        console.log('[ERRO] DIA INVALIDO')
}
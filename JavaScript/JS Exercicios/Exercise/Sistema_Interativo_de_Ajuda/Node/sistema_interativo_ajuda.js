const prompt = require('prompt-sync')();

function jsAjuda(comando="fim") {

    if (comando == "fim") {

        return true;
    
    } else {

        console.log('\u001b[94m' + `Acessando o manual do comando '${comando}'`);

        console.log('\u001b[37m' + 'ERA PARA TER ALGO AQUI ;) Mas o JS não tem um comando igual o help() do Python.');
    
        return false;
    }
}

while (true) {

    console.log('\u001b[92m' + '~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\nSISTEMA DE AJUDA JSHelp\n~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');

    let userAjuda = prompt('\u001b[37m' + 'Função ou Biblioteca > ').trim().toLowerCase();

    if (jsAjuda(userAjuda)) {

        console.log('\u001b[91m' + '~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\nAté Logo!\n~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');

        break;
    }
}
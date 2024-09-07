function sortear(max,listaSorteio) {

    for (let cont = 0; cont < 5; cont++) {

        listaSorteio.push(Math.floor(Math.random() * max));

        while (listaSorteio[cont] == 0) {

            listaSorteio[cont] = (Math.floor(Math.random() * max));
        }
    }

    return listaSorteio;
}

function somaPar(listaNum, mostrarPares=false) {

    let soma = 0;

    let numPares = '';

    for (let numLista of listaNum) {

        if (numLista % 2 == 0) {

            soma += numLista;

            numPares = numPares + numLista + ',';
        }
    }

    if (mostrarPares) {

        return numPares;
    }

    return soma;
}

let numeros = new Array;

process.stdout.write('Sorteando 5 valores da lista: ');

numeros = sortear(10, numeros);

for (let num of numeros) {

    process.stdout.write(`${num} `);
}

console.log(`PRONTO!\nSomando os valores pares ${somaPar(numeros, true)} do Array, temos ${somaPar(numeros)}`);
function maior(...num) {

    let maior = 0;

    console.log('-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-\nAnalisando os valores passados...');

    console.log(`${num} Foi(ram) informado(s) ${num.length} valore(s) ao todo.`)

    for (let numeros of num) {

        if (maior == 0 || maior < numeros) {

            maior = numeros;
        } 
    }

    console.log(`O maior valor informado foi ${maior}.`)
}

maior(2,9,4,23,5,11,7,1);

maior(4,7,0);

maior(1,2);

maior(6);

maior();
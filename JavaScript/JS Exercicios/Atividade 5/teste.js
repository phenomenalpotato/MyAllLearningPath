console.log('Escreva um numero entre 1 e 100');

function selecionar(numero) {

    let lista = [];

    for (let c = numero; c > 0; --c) {

        lista.push(c);    
    
    }

    lista.sort((a, b) => a - b);

    return lista;

}

function sumTot(vetor) {

    let sum = 0;

    for (let i in t) {

        sum += vetor[i]; 
    
    }

    return sum
    
}

let t = selecionar(10);

let soma = sumTot(t)

// for (const element of t) {
    
//     sum += element; 

// }

// for (let i = 0; i < t.length; i++) {
    
//     sum += t[i]; 

// }


console.log(`Ao todo temos ${t.length} cadastrados, O maior número informado foi ${t[t.length - 1]}, O menor valor informado foi ${t[0]}, Somando todos os valores temos ${soma}, A média dos valores digitados é ${soma / t.length}`);
console.log('------------- LISTAGEM DE PREÇO -------------');

let arrayProdutos = ['Lápis', 'Borracha', 'Caderno', 'Estojo', 'Trasferidor', 'Compasso', 'Mochila', 'Canetas', 'Livro', 
    1.75, 2.00, 15.90, 25.00, 4.20, 9.99, 120.32, 22.30, 34.90,];

for (let cont = 0; cont < 9; cont++) {

    console.log(`${arrayProdutos[cont]}........................ R$${Number(arrayProdutos[9 + cont]).toFixed(2)}`);
}
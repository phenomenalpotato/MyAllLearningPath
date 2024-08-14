const prompt = require('prompt-sync')();

let nomeProduto = '';

let decisaoUser = '';

let produtoMaisBarato = '';

let preco = 0;

let quantidadeProdutos = 0;

let totalProduto = 0;

let menorPreco = 0;

let contadorProdutos = 0;

while (true) {

    console.log('------------- Saldão do Saldanha -------------');

    nomeProduto = prompt('Nome do Produto: ');

    preco = Number(prompt('Preço: R$ '));

    contadorProdutos++;

    totalProduto += preco;

    if (preco > 1000) {

        quantidadeProdutos++;
    }

    if (contadorProdutos == 1 || preco < menorPreco) { // menorPreco == 0 || preco < menorPreco <- desse jeito desconsidera os produtos oferecidos de graça;

        menorPreco = preco;

        produtoMaisBarato = nomeProduto;
    } 

    decisaoUser = prompt('Quer continuar [S/N]: ').trim().toUpperCase().charAt(0);

    while (decisaoUser != 'S' && decisaoUser != 'N') {

        console.log('ERRO! Digite somente S para SIM e N para NÃO!');

        decisaoUser = prompt('Quer continuar [S/N]: ').trim().toUpperCase().charAt(0);

    }

    if (decisaoUser == 'N') {

        break;
    }
}

console.log(`O total da compra foi R$${totalProduto.toFixed(2)}. Temos ${quantidadeProdutos} produto(s) custando mais de R$1000.00. O produto mais barato, foi ${produtoMaisBarato} que custou R$${menorPreco.toFixed(2)}.`);
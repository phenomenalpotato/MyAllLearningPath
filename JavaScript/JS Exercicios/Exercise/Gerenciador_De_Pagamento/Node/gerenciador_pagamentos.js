const prompt = require('prompt-sync')();

const valorProduto = Number(prompt('Quanto é o valor do produto R$: '));

const condicaoPagamento = Number(prompt('Qual a condição do pagamento: [1] Á vista Dinheiro/ Cheque. - [2] Á vista no cartão. - [3] 2x no Cartão. - [4] 3x ou mais no Cartão.: '));

let quantidadeParcelas = 0;

console.log(`Sua compra foi de R$${valorProduto.toFixed(2)}`)

function descontoProduto(desconto) {

    const produtoDesconto = valorProduto - (valorProduto * desconto);  

    return produtoDesconto.toFixed(2);
}

function jurosProduto(juros) {

    const produtoJuros = valorProduto + (valorProduto * juros);

    return produtoJuros.toFixed(2);
}

switch (condicaoPagamento) {

    case 1:

        console.log(`E vai custar agora R$${descontoProduto(0.10)}`);

        break;

    case 2:

        console.log(`E vai custar agora R$${descontoProduto(0.05)}`);

        break;

    case 3: 

        console.log(`Sem desconto e sem juros. Será cobrado o preço normal, parcelado em 2 vezes de - R$${(valorProduto / 2).toFixed(2)}`)

        break;

    case 4:

        quantidadeParcelas = Number(prompt('Quantas parcelas: '));

        console.log(`Será cobrado um valor total com Juros de 20%. No total, fica R$${jurosProduto(0.20)} - Em ${quantidadeParcelas}x parcelas de R$${(jurosProduto(0.20) / quantidadeParcelas).toFixed(2)}`);

        break;
    
    default:

        console.log('ERRO! Número digitado é errado!');

}
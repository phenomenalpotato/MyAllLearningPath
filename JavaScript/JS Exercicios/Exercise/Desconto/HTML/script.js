let valorProd = document.querySelector('input.numValor');

let resul = document.querySelector('p.resul');

function calcular() {

    let produto = Number(valorProd.value);

    let desconto = (produto * 0.05);

    resul.innerHTML = `O valor do produto é R$${produto}, o desconto foi de R$${desconto} e o valor final é R$${produto - desconto}`;

    produto = '';

}
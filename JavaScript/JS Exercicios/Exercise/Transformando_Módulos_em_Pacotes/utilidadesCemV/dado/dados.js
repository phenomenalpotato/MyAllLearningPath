import prompt from "../node_modules/prompt-sync/index.js";
import {aumentar, dobro, metade, moeda, diminuir} from "../moeda/moeda.js"

function resumo (valorNumero) {

    console.log('-'.repeat(20));
    console.log('  RESUMO DO VALOR ');
    console.log('-'.repeat(20));

    console.log(`Preço analisado: R$ ${moeda(valorNumero)}`);
    console.log(`Dobro do preço: ${dobro(valorNumero, true)}`);
    console.log(`Metade do preço: ${metade(valorNumero, true)}`);
    console.log(`35% de aumento: ${aumentar(valorNumero, 35, true)}`);
    console.log(`22% de redução: ${diminuir(valorNumero, 22, true)}`);
    console.log('-'.repeat(20));
}

export function leiaDinheiro(msg) {

    let preco = prompt()(msg).replace(',', '.').trim();

        while (preco.length == 0 || isNaN(preco)) {

            console.log(`\u001b[31mERRO! ${preco} é um preço inválido!\u001b[m`);

            preco = prompt()(msg).replace(',', '.');
        }

    preco = Number(preco);

    resumo(preco);
}
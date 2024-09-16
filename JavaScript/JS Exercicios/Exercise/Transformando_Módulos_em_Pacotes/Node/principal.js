import prompt from "../utilidadesCemV/node_modules/prompt-sync/index.js"

import {metade, dobro, aumentar, moeda} from "../utilidadesCemV/moeda/moeda.js"

let preco = Number(prompt()('Digite um número: R$'));

let precoEmReal = moeda(preco);

console.log(`A metade de ${precoEmReal} é ${metade(preco, true)}\nO dobro de ${precoEmReal} é ${dobro(preco, true)}\nAumentando 10%, temos ${aumentar(preco, 10, true)}`);
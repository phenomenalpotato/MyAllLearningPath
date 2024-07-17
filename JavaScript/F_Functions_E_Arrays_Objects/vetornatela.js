let valores = [8,1,7,4,2,9];

valores.sort();

for (let pos = 0; pos < valores.length; pos++) { // <- Esse método com o For dessa maneira é chamado de "Percurso de Exibição de Vetores"

    console.log(`Na posição ${pos} tem o valor: ${valores[pos]}`);

}

for (var pos in valores) {

    console.log(`A posição ${pos} tem o elemento: ${valores[pos]}`);

} /*Estrutura For utilizando o In dentro. 
    É otimizado para variaveis compostas e Objetos. 
    Significa "Para 'For' cada posição em/ dentro da variavel composta 'num' Eu vou mostrar algo. 
    Nesse caso em especifico cada elemento dentro de 'num'" */

let teste = [9, "man", 9.7, false];

console.log(teste);
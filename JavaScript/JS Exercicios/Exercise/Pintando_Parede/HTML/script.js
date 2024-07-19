let numAltura = document.querySelector('input.numAltura');

let numLargura = document.querySelector('input.numLargura');

let resul = document.querySelector('p.resul');

let tinta = document.querySelector('input.tinta');

let corpo = document.body;

function calcular() {

    let altura = Number(numAltura.value);

    let largura = Number(numLargura.value);

    let opTinta = tinta.value;

    let areaParede = altura * largura;

    corpo.style.background = opTinta;

    resul.innerHTML = `A area da parede é ${areaParede}, e os litros de necessário será: ${areaParede / 2}L`;


}
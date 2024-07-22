let num = document.querySelector('input.num');

let resul = document.querySelector('p.resul');

function calcular() {

    let valor = parseInt(num.value);

    resul.innerHTML = `O valor inteiro é ${valor}`;

    num.value = '';
}
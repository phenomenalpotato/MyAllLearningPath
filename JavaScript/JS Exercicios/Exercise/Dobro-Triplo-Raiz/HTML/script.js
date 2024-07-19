let numero = document.querySelector('input.num');

let resul = document.querySelector('p.resul');

function calcular() {

    let numSel = Number(numero.value);

    resul.innerHTML = `O Numero digitado foi ${numSel}, o dobro é ${numSel * 2}, o triplo é ${numSel * 3} e a raiz é ${numSel ** 0.5}`;

}
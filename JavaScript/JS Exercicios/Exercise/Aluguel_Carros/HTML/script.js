const numdias = document.querySelector('input.numDias');

const numkm = document.querySelector('input.numKm');

const resul = document.querySelector('p.resul');

function calcular() {

    const dias = Number(numdias.value);

    const km = Number(numkm.value);

    const preco = (60 * dias) + (0.15 * km);

    resul.innerHTML = `O numero de dias rodados é ${dias} dias, a quantidade de quilometros rodados são ${km}Km com um total devendo de R$${preco}`;

    numdias.value = '';

    numkm.value = '';

}
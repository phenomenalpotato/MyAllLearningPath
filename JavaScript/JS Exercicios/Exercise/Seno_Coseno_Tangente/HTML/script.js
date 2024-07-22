const numAngulo = document.querySelector('input.numAngulo');

const resul = document.querySelector('p.resul');


function anguloParaRaio(ang) {

    return ang * (Math.PI / 180);

}

function calcular() {

    const valorAngulo = Number(numAngulo.value);

    const seno = Math.sin(anguloParaRaio(valorAngulo));

    const conse = Math.cos(anguloParaRaio(valorAngulo));

    const tang = Math.tan(anguloParaRaio(valorAngulo));

    resul.innerHTML = `O Angulo é ${valorAngulo} o Seno é ${seno.toLocaleString()}, o Coseno é ${conse.toLocaleString()}, e a Tangente é ${tang.toLocaleString()}`;

    numAngulo.value = '';
}
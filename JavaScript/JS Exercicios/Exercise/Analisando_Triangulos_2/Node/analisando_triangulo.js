const prompt = require('prompt-sync')();

const primeiroSegmento = Number(prompt('Qual o tamanho do Primeiro Segmento: '));

const segundoSegmento = Number(prompt('Qual o tamanho do Segundo Segmento: '));

const terceiroSegmento = Number(prompt('Qual o tamanho do Teceiro Segmento: '));

function IsTriangulo(retaA, retaB, retaC) {

    let medidas = [retaA, retaB, retaC].sort((a, b) => a - b);

    const somaSegmentos = medidas[0] + medidas[1];

    return somaSegmentos > medidas[2];

}

if (!IsTriangulo(primeiroSegmento, segundoSegmento, terceiroSegmento)) {

    console.log('NÃO É UM TRIÂNGULO!');

    process.exit();

} else {

    console.log('É UM TRIÂNGULO!');

    if ((primeiroSegmento == segundoSegmento) && (segundoSegmento == terceiroSegmento)) {

        console.log('Os segmentos podem formar um Triângulo Equilátero!');

    } else if ((primeiroSegmento != segundoSegmento) && (primeiroSegmento != terceiroSegmento) && (segundoSegmento != terceiroSegmento)) {

        console.log('Os segmentos acima podem formar um Triângulo Escaleno!');

    } else {

        console.log('Os segmentos acima podem formar um Triângulo Isóceles!');
    }

}
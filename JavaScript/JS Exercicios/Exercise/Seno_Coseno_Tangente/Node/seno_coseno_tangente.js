const prompt = require('prompt-sync')();

const angulo = Number(prompt('Qual o angulo: '));

// function radianoParaGraus(rad) {

//     return rad / (Math.PI / 180);
// }

function grausParaRadianos(graus) {


    return graus * (Math.PI / 180);
}

const seno = Math.sin(grausParaRadianos(angulo));

const cose = Math.cos(grausParaRadianos(angulo));

const tang = Math.tan(grausParaRadianos(angulo));

console.log(`Seno do Angulo ${angulo} é ${seno.toLocaleString()}, o Coseno é ${cose.toLocaleString()} e o Seno é ${tang.toLocaleString()}`);

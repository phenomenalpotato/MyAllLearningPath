let estado = window.document.querySelector('input.ValEstado');

const resul = document.querySelector('p.resul');

function verificar() {

    document.body.style.background = 'green';

    const ValEstado = estado.value;

    const resulEstado = ValEstado.toUpperCase().trim();

    resul.innerHTML = `O estado digitado contem Santo no começo: ${resulEstado.startsWith('SANTO')}`;

}
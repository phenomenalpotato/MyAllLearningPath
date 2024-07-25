const nome = document.querySelector('input.valNome');

const resul = document.querySelector('p.resul');

function verificar() {

    let valNome = nome.value.trim();

    let nomeFormat = valNome.split(" ");

    resul.innerHTML = `O primeiro nome é ${nomeFormat[0]}. E o ultimo é ${nomeFormat[nomeFormat.length - 1]}`;

}
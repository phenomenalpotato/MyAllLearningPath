const numNome = document.querySelector('input.valNome');

const resul = document.querySelector('p.resul');

function verificar() {

    let nome = numNome.value;

    let nomeFormat = nome.toUpperCase().trim();

    let verArray = [];

    for (let c = 0; c < nomeFormat.length; c++) {

        if(nomeFormat[c].includes('A') == true) {

            verArray.push(nomeFormat[c]);

        }

    }

    resul.innerHTML = `A quantidade de letras 'A' que aparecem é ${verArray.length}. A primeira ocorrencia da letra A é ${nomeFormat.indexOf('A')}. A ultima ocorrencia da letra A foi ${nomeFormat.lastIndexOf('A')}`;

}
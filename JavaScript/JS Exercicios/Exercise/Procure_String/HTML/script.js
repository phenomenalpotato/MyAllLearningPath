const nome = document.querySelector('input.valNome');

const resul = document.querySelector('p.resul');

function verificar() {

    const valNome = nome.value;

    const modNome = valNome.toUpperCase().trim();

    const nomeReal = modNome.split(" ");

    resul.innerHTML = `O nome digitado foi ${nomeReal}, tem silva: ${nomeReal.includes("SILVA")}`;

    nome.value = '';
}
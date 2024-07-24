let valNome = document.querySelector('input.nome');

let resul = document.querySelector('p.resul');

function verificar() {

    let nome = valNome.value;

    resul.style.color = 'red';

    // window.alert(typeof(nome));

    let novoNome = nome.trim();

    resul.innerHTML = `O Nome Completo todo Maiusculo: ${nome.toUpperCase()}, e tudo em Minusculo: ${nome.toLowerCase()}, tem um total de ${nome.replace(/ /g, "").length} sem espaços, com ${novoNome.split(" ")[0].length} letras no primeiro nome` 

}
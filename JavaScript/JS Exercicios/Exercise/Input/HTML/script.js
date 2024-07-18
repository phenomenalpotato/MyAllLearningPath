function clicar() {

    let nome = document.querySelector('input.nome').value;

    let resul = document.querySelector('p.resul');

    resul.innerHTML += `${nome}`;

}
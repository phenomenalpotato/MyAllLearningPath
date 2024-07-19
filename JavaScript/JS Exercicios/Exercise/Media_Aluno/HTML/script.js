let num1 = document.querySelector('input.nota1');

let num2 = document.querySelector('input.nota2');

let nome = document.querySelector('input.nome');

let result = document.querySelector('p.resul');

function calcular() {

    let nomeAluno = nome.value;

    let nota1 = Number(num1.value);

    let nota2 = Number(num2.value);

    result.innerHTML = `A media das duas notas de ${nomeAluno} é ${(nota1 + nota2) / 2}`;
}
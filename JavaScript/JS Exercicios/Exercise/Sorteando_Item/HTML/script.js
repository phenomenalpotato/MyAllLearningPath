const valueAluno = document.querySelector('input.aluno1');

const valueAluno2 = document.querySelector('input.aluno2');

const valueAluno3 = document.querySelector('input.aluno3');

const valueAluno4 = document.querySelector('input.aluno4');

const result = document.querySelector('p.resul');

function getRandomInt(max) {

    return Math.floor(Math.random() * max);
}

function advinhar() {

    let aluno1 = valueAluno.value;

    let aluno2 = valueAluno2.value;

    let aluno3 = valueAluno3.value;

    let aluno4 = valueAluno4.value;

    const resultado = getRandomInt(4);

    window.alert(resultado);

    if(resultado == 0) {

        result.innerHTML = `O Aluno escolhido foi ${aluno1}`;

    } else if (resultado == 1) {

        result.innerHTML = `O Aluno escolhido foi ${aluno2}`;

    } else if (resultado == 2) {

        result.innerHTML = `O Aluno escolhido foi ${aluno3}`;

    } else {

        result.innerHTML = `O Aluno escolhido foi ${aluno4}`;

    }


}
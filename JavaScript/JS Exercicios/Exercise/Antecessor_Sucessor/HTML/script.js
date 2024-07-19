var num1 = document.querySelector('input.num').value;

// var num1 = document.querySelector('input.num');


let resulP = document.querySelector('p.resul');

function descobrir() {

    var numAtual = Number(num1);

    resulP.innerHTML = `O Número digitado foi ${numAtual}, o Antecessor foi ${numAtual - 1}, e o Próximo será ${numAtual + 1}`;

}



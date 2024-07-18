let numeroIn = Number(document.querySelector('input.num').value);

let resulP = document.querySelector('p.resul');

function descobrir() {

    window.alert(numeroIn);

    resulP.innerHTML = `O Número digitado foi ${numeroIn}, o Antecessor foi ${numeroIn - 1}, e o Próximo será ${numeroIn + 1}`;
}
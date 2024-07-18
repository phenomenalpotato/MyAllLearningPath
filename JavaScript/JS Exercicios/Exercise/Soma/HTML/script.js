function calcular() {

    let num1 = Number(document.querySelector('input.num1').value);

    let num2 = Number(document.querySelector('input.num2').value);

    let resul = document.querySelector('p.resul');

    resul.innerHTML = `A soma entre os dois resultados é ${num1 + num2}`;
}
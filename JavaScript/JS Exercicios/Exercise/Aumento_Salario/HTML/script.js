let numSal = document.querySelector('input.numSalario');

let resul = document.querySelector('p.resul');

function calcular() {

    let salario = Number(numSal.value);

    let aumento = salario * 0.15;

    resul.innerHTML = `O salario atual é de R$${salario}, com o aumento de 15% ficara R$${aumento + salario}`;

    numSal.value = '';

}
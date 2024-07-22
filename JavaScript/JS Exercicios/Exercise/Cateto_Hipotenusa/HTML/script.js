let catetoOp = document.querySelector('input.numCatetoOpo');

let catetoAdj = document.querySelector('input.numCatetoAdj');

let resul = document.querySelector('p.resul');


function calcular() {

    const catOp = Number(catetoOp.value);
    
    const catAdj = Number(catetoAdj.value);

    const hipotenusa = ((catOp ** 2) + (catAdj ** 2)) ** 0.5;

    resul.innerHTML = `A Hipotenusa é: ${hipotenusa.toLocaleString()}`;

    catetoAdj.value = '';

    catetoOp.value = '';

}
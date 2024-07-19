let num = document.querySelector('input.numMetros');

let resul = document.querySelector('p.resul');
 
function calcular() {

    let metros = Number(num.value);

    let cm = metros * 100;

    let mm = metros * 1000;

    resul.innerHTML = `Os Metros digitados ${metros}m, convertido para Centimetros ${cm.toLocaleString()}cm, e Milimetros ${mm.toLocaleString()}mm`;

}
let num = document.querySelector('input.dinheiro');

let resul = document.querySelector('p.resul');

let corpo = document.body;

function calcular() {

    let real = Number(num.value);

    let dolar = real / 3.27;

    resul.innerHTML = `Consegue com o dinheiro na carteira R$${real} comprar $${dolar}`;

    if (dolar < 100) {

        corpo.style.background = 'red';

        resul.innerHTML += ' - Tá pobre, nem pensa em viajar agora!'

    } else {

        corpo.style.background = 'green';
        
        resul.innerHTML += ' - Tá podendo, me empresta uma grana ai, man! '
    }

}
const celcius = document.querySelector('input.numCelcius');

const resul = document.querySelector('p.resul');

const corpo = document.body;

function calcular() {

    const valorCelcius = Number(celcius.value);

    const fahrenheit = ((valorCelcius * 9) / 5) + 32;

    resul.innerHTML = `A temperatura é ${valorCelcius}C convertido em Fahrenheit é ${fahrenheit}F.`;

    if (valorCelcius >= 34) {

        resul.innerHTML += ' Tá muito hot, man! Dá não...';

        corpo.style.background = 'red'

    } else {

        resul.innerHTML += ' Tá ok.';

        corpo.style.background = 'blue';
    }

    celcius.value = '';
}
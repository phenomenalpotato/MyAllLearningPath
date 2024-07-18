var data = new Date();

var horas = data.getHours();

var corpo = window.document.body;

var imagem = document.querySelector('img.imgDia');


if (horas < 12) {

    var paragrafo = document.querySelector('p.paraHoras')

    paragrafo.innerText = `Agora são ${horas} horas! Bom Dia!`;

    corpo.style.background = '#e2cd9f';

    imagem.src = 'img/foto-dia.jpg'; // mudando a imagem do HTML com o JS
    

} else if (horas < 18) {

    var paragrafo = document.querySelector('p.paraHoras');

    paragrafo.innerText = `Agora são ${horas} horas! Boa Tarde`;

    corpo.style.background = '#b9846f';

    imagem.src = 'img/foto-tarde.jpg';

} else {

    var paragrafo = document.querySelector('p.paraHoras');

    paragrafo.innerText = `Agora são ${horas} horas! Boa Noite`;

    corpo.style.background = '#515154';

    imagem.src = 'img/foto-noite.jpg';
}
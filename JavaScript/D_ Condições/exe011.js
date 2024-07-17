var horaMaq = new Date; 

var hora = horaMaq.getHours(); // Date é para pegar a hora da maquina que esta executando o script.

console.log(`Agora são ${hora} horas`);

if (hora < 6) {

    console.log('Boa madrugada dos Mortos! hehehe!');

} else if (hora < 12) {

    console.log('Bom dia!');

} else if (hora <= 18) {

    console.log('Boa tarde!');

} else {

    console.log('Boa noite!');

}
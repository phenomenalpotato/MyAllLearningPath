const numValor = document.querySelector('input.num');

let resul = document.querySelector('p.resul');

function calcular() {

    const numero = numValor.value;

    const numVer = numero.length;

    if (numero < 0) {

        window.alert('INVALIDO! Numero digitado menor que 0!');

    } else {

        if (numVer == 1) {
        
            resul.innerHTML = `Numero digitado é ${numero}, ele separado: Unidade: ${numero[0]}`;
            
        } else if (numVer == 2) {
    
            resul.innerHTML = `Numero digitado é ${numero}, ele separado: Unidade: ${numero[1]}, Dezena: ${numero[0]}`;
    
        } else if (numVer == 3) {
    
            resul.innerHTML = `Numero digitado é ${numero}, ele separado: Unidade: ${numero[2]}, Dezena: ${numero[1]}, Centena: ${numero[0]}`;
        
        } else if (numVer == 4) {
    
            resul.innerHTML = `Numero digitado é ${numero}, ele separado: Unidade: ${numero[3]}, Dezena: ${numero[2]}, Centena: ${numero[1]}, Milhar: ${numero[0]}`;
        
        } else {
    
            window.alert('INVALIDO! Numero digitado maior que 9999 ou não digitado!');
    
            resul.innerHTML = '';
        }
    }

    numValor.value = ``;
}
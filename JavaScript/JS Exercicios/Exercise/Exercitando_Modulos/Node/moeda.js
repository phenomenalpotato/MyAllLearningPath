function aumentar (num = 0, taxa = 0, formatacao = false) {

    let res = ((taxa/100) * num) + num;

    if (formatacao) {

        return moeda(res);
    
    } else {

        return res;
    }
}

function diminuir (num = 0, taxa = 0, formatacao = false) {

    let res = ((taxa/100) * num) - num;

    if (formatacao) {

        return moeda(res);
    
    } else {
     
        return res;
    }
}

function dobro (num = 0, formatacao = false) {

    let res = num * 2;

    if (formatacao) {

        return moeda(res)
    
    } else {

        return res;
    }
}

function metade (num = 0, formatacao = false) {

    let res =  num / 2;

    if (formatacao) {

        return moeda(res);

    
    } else {

        return res;
    } 
}

function moeda (valorReais) {

    return valorReais.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});
}

module.exports = {aumentar, diminuir, dobro, metade, moeda};
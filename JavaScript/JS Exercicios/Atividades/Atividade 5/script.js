let numInpu = window.document.querySelector('input.num');

let selec = document.getElementById('selTab');

let opt = document.getElementById('op');

let resultado = document.querySelector('p.resul');

let vetorResul = [];

function sumTot(vetor) {

    let sum = 0;

    for (let i in vetor) {

        sum += vetor[i]; 
    
    }

    return sum;
    
}

function checkVetor(vetorP, numOption) {

    for (let c in vetorP) {

        // window.alert(`Elemento: ${vetorP[c]} - Numero Escolido: ${numOption} - Todo o Vetor: ${vetorP} - Posição: ${c} - Quantidades de Elementos ${vetorP.length}`);


        if (vetorP[c] == numOption) {

            // window.alert(`TRUE - Elemento: ${vetorP[c]} - Numero Escolido: ${numOption} - Todo o Vetor: ${vetorP} - Posição: ${c} - Quantidades de Elementos ${vetorP.length}`);

            return true;
        
        } 
    } 

    return false;
}

function selecionar() {

    let vNumInput = Number(numInpu.value);

    let resultCheck = checkVetor(vetorResul, vNumInput);

    if (numInpu.value.length == 0) {

        window.alert('Campo Numero vazio!'); 
        return false;

    } 

    if (vNumInput > 100 || vNumInput < 0) {

        window.alert('ERROR! Valor selecionado maior que 100 ou menor que 0');
        return false;

    }
    
    if (resultCheck) {

        window.alert(`O numero ${vNumInput} já existe na lista.`);

    } else {

    criarOpt(vNumInput);

    vetorResul.push(vNumInput); 

    vetorResul.sort((a, b) => a - b);

    resultado.innerHTML = '';

    }

    numInpu.value = '';

    numInpu.focus(); // Para deixar o cursos piscando mesmo apos presionar o botao ADICIONAR. Caso ao contrario sem .focus() o cursor apos presionar o botão vai sair do input

}

function criarOpt(valorInpu) {

    opt.innerHTML = '';

    let itemAnterior = document.createElement('option');

    itemAnterior.text = `Valor ${valorInpu} adicionado`;

    // itemAnterior.value = valorOpt;

    selec.appendChild(itemAnterior);
}

function finalizar() {

    if (vetorResul.length == 0) {

        window.alert('ERROR! Seleção sem numero algum. Tabela vazia!');

        return false;

    }

    let somaVetor = sumTot(vetorResul);

    resultado.innerHTML = `Ao todo, temos ${vetorResul.length} números cadastrados. </br> O maior valor informado foi ${vetorResul[vetorResul.length - 1]}. </br> O menor valor informado foi ${vetorResul[0]}. </br> Somando todos os valores, temos no total o valor ${somaVetor}. </br> A média dos valores digitados é ${somaVetor / vetorResul.length}.`;

}

function limpar() {

    resultado.innerHTML = '';

    selec.innerHTML = '';

    vetorResul = [];
}
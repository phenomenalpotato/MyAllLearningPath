let inicio = window.document.querySelector('input.inicio');

let fim = window.document.querySelector('input.fim');

let passo = window.document.querySelector('input.passo');

let cont = window.document.querySelector('p.p2');

let resulParagrafo = window.document.querySelector('p.p3')

function contar() {

    let inpuIni = Number(inicio.value); // Convertendo o valor retornado de input para number. O  campo input retorna VAZIO quando é carregado com a pagina ou o user não coloca nada no campo

    let inpuFim = Number(fim.value);

    let inpuPasso = Number(passo.value);

    if (inicio.value.length != 0 && fim.value.length != 0 && passo.value.length != 0) { // Pegando o tamanho do input

            if (inpuPasso == 0) {

                window.alert('Campo PASSO inválido! Considerando PASSO = 1');

                inpuPasso = 1; 
    
            }

            if(inpuIni < inpuFim) {
                
            do {

                resulParagrafo.innerHTML += `Contando: ${inpuIni} \u{1F449} `;

                inpuIni = inpuIni + inpuPasso;


            } while(inpuIni <= inpuFim)
            
            resulParagrafo.innerHTML += `\u{1F3C1}`;

            } else {

                do {

                    resulParagrafo.innerHTML += `Contando: ${inpuIni} \u{1F449}`

                    inpuIni = inpuIni - inpuPasso;

                } while (inpuIni >= inpuFim)

                resulParagrafo.innerHTML += `\u{1F3C1}`;
            }



    } else {

        window.alert('Algum dos campos esta vazio');
        resulParagrafo.innerHTML = 'Impossivel Contar!';

    }

}
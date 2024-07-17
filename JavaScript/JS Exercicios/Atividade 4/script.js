function tabuada() {

    let numero = document.querySelector('input.num');

    let tab = document.getElementById('seltab');

    if (numero.value.length == 0) {

        alert('Não inseriu nenhum numero!')

        tab.innerHTML = '';

        let itemAnte = document.createElement('option');

        itemAnte.text = 'Digite um Número acima';

        tab.appendChild(itemAnte);

    } else {

        let resul = 0;

        let userNum = Number(numero.value);

        tab.innerHTML = ''; // Para limpar a lista select para a proxima execução


        for(let c = 1; c <= 10; c++) {

            resul = c * userNum;

            // window.alert(`${c} x ${userNum} = ${resul}`);

            let item = document.createElement('option'); // Criando um elemento option para colocar dentro do select no HTML
            item.text = `${c} x ${userNum} = ${resul}`; // text que é parte de dentro do option vamos colocar um string dentro desse option
            item.value = `tab ${c}` // para que a tag option criada tenha valor caso use alguma linguagem Server-Side, para saber qual foi o Item selecionado
            tab.appendChild(item) // Para fazer com que apareça na pagina. Com o appendChild faz com que adicione um elemento filho nesse caso option acima

        };

    }

}
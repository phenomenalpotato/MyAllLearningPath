function calcular() {

    var data = new Date();

    var ano = data.getFullYear() // Vai pegar o ano inteiro com os 4 digitos

    var dataNasc = document.getElementById('ano');
    
    var res = document.getElementById('res');

    if (dataNasc.value.length == 0 || dataNasc.value > ano) {

        window.alert('Verifique os dados e tente novamente!');

        window.alert(dataNasc.value);

    } else {

        var fsex = document.getElementsByName('radisex')[1] // Para pegar os inputs do tipo radio tem que ser por Name. Pegando o radisex Feminino

        var msex = document.getElementsByName('radisex')[0] // Pegando o radisex Masculino

        var idade = ano - Number(dataNasc.value);

        // res.innerHTML = `Idade Calculada: ${idade} anos`;

        var gen = ''; // Criando uma variavel sem conteudo

        var img = document.createElement('img') // Criando a tag IMG diretamente no JS, sem existir/ estar instanciada no HTML antes

        img.setAttribute('id', 'foto') // Atribuindo um ID para a tag img acima via JS. Valor do id="foto"

        img.style.height = 'auto'; // configurando a altura da imagem

        img.style.width = '50%'; // configurando o tamanho da imagem

        img.style.marginTop = '19px'; // configurando a margem de cima da imagem

        if (fsex.checked) {

            gen = 'Homem';

            if (idade >= 0 && idade < 10) {

                // Criança

                img.setAttribute('src', 'img/menino.jpg'); // colocando o caminho da imagem no objeto img


            } else if (idade >= 10 && idade < 21) {

                // Adolescente

                img.setAttribute('src', 'img/jovem-homem.jpg');

            } else if (idade >= 21 && idade < 50) {

                // Adulto

                img.setAttribute('src', 'img/homem-adulto.jpg');

            } else {

                // idoso

                img.setAttribute('src', 'img/idoso.jpg');
            }

        } else if (msex.checked) {

            gen = 'Mulher';

            if (idade >= 0 && idade < 10) {

                // Criança

                img.setAttribute('src', 'img/menina.jpg');

            } else if (idade >= 10 && idade < 21) {

                // Adolescente

                img.setAttribute('src', 'img/jovem-mulher.jpg');

            } else if (idade >= 21 && idade < 50) {

                // Adulto

                img.setAttribute('src', 'img/mulher-adulta.jpg');

            } else {

                // idoso

                img.setAttribute('src', 'img/idosa.jpg');
            }

        }

        // res.style.textAlign = 'center'; // Caso eu quissese centralizar o texto usando JavaScript

        res.innerHTML = `Detectamos o seu genero ${gen} e sua idade ${idade} anos`;

        res.appendChild(img) // Vou adicionar o elemento img a esse objeto
    }

}


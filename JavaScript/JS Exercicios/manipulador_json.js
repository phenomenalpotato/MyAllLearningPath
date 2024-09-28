const fs = require('fs'); // Importando para o código o módulo fs, para trabalharmos com arquivos. Abrir, ler, escrever e fechar arquivos.

// Eu vou criar algumas funções especificas somente para deixar o código principal mais limpo e faćil de se entender, e ler

function lerArquivo(arq) {

    return fs.readFileSync(arq, 'utf8');
}

function escreverArquivo(arq, dados) {

    try {

        fs.writeFileSync(arq, dados, {encoding: "utf8", flag: "w+"});

        return "Sucesso!";
    
    } catch (erro) {

        return erro;
    }
}

function infoJogadores(arrayJogadores) { // <- Vai me retornar um Arrays em ordem crescente com as informações dos jogadores (gols, nomes partidas)

    try {

        let gols = new Array; // Array para atribuir os Gols dos Jogadores.

        for (let jogadores of arrayJogadores["Artilheiros"]) { // O operador 'of' irá nos devolver o valor de "Artilheiros", que é um Array. 
                                                              // Neste momento, depois de convertidos, são outros objetos JS.
            gols.push(jogadores.gols);                       // Graças a isso, podemos utilizar uma Estrutura de Repetição para iterar por todo esse Array.
        }

        gols.sort((b, a) => a - b); // Organizar o Array em ordem crescente, utilizando o método sort()
                                   // Seguindo melhores práticas dadas pelo SonarLint (regra: javascript:S2871) 
                                  // Para esse método não ter nenhuma surpresa, vamos providenciar uma função de comparação que retorna a ordem organizada. 

        let nomeArtilheiros = new Array; // Array que irá ter os nomes em ordem dos artilheiros

        let lesionados = new Array; // Array que irá a situação de lesão em ordem dos artilheiros

        let partidas = new Array; // Array que irá ter as partidas em ordem dos artilheiros

        for (let cont = 0; cont < 5; cont++) {

            for (let jogador of arrayJogadores["Artilheiros"]) {

                if (gols[cont] == jogador.gols) { // Comparando com o Array (gols) em ordem crescente, quem são os nomes dos Jogadores que correspodem aos gols em questão.

                    nomeArtilheiros.push(jogador.nome);

                    lesionados.push(jogador.lesionado);

                    partidas.push(jogador.partidas);
                }
            }
        }

        return [gols, nomeArtilheiros, lesionados, partidas]; // Retornando um Array com os Array contendo os Gols, Nomes, Lesão, e Partidas de todos os Jogadores

    } catch (erro) {

        console.error('Alguma deu errado:', erro.message);
    }
}

function crieObjetoNovoJogador(conteudo) { // <- Irá criar a nossa anãlise final para a comissão técnica. E também escrever essa nossa análise em um novo Arquivo 

    try {

        // Vamos criar um Objeto JavaString com os dados dos 5 artilheiros do time em ordem.

        let objetoArtilheiro = new Object; // Vou usar a classe Object para construir esse Objeto.

            // O REPORT SERÁ MONTADO, CONSIDERANDO AS SEGUINTES CONDIÇÕES:
                // Se o Jogador jogou mais ou exatas 40 jogos na temporado e está lesionado, terá a situação como 'Departamento Médico'. 
                // Se está lesionado, mas jogou menos de 40 partidas está em processo de 'Recuperação'.
                // Se não se lesionou, e jogou menos de 40 partidas, está 'Disponível'.

        for (let nomeJogador in conteudo[1]) {

            if (conteudo[2][nomeJogador] && conteudo[3][nomeJogador] >= 40) {

                objetoArtilheiro[`${ conteudo[1][nomeJogador] }`] = { gols: conteudo[0][nomeJogador], situacao: 'Departamento Médico' }; // Novo Objeto JS contendo os 5 primeros artilheiros e sua situação para atuar, será se ele está lesionado ou não.
            
            } else if (conteudo[2][nomeJogador]) {

                objetoArtilheiro[`${ conteudo[1][nomeJogador] }`] = { gols: conteudo[0][nomeJogador], situacao: 'Processo de Recuperação' }; // Novo Objeto JS contendo os 5 primeros artilheiros e sua situação para atuar, será se ele está lesionado ou não.

            } else {

                objetoArtilheiro[`${ conteudo[1][nomeJogador] }`] = { gols: conteudo[0][nomeJogador], situacao: 'Disponível' }; // Novo Objeto JS contendo os 5 primeros artilheiros e sua situação para atuar, será se ele está lesionado ou não.
            }
        }

        return objetoArtilheiro;

    } catch (erro) {

        console.error("Alguma coisa deu errado: ", erro.message);
    }
}

// MAIN PROGRAM -> Usando uma estrutura try... catch para pegar qualquer exceção que venha a dar ao tentar manipular o arquivo;

try {

    let conteudoJson = lerArquivo('./usuarios.json'); // Nome do Arquivo JSON com os dados brutos que já temos.
    
    let objetoJson = JSON.parse(conteudoJson); // Utilizando do método parse para poder converter o conteúdo no arquivo em um Objeto JavaScript

    let objetoRelatorio = crieObjetoNovoJogador(infoJogadores(objetoJson));

    // Poderia fazer igual ao JSON original no arquivo .json e fazer com que estes objetos JavaScript estivessem dentro de um Array. Mas acho que adicionaria um pouco mais de linha do que este exemplo simple pede. Por isso, vou deixar o Objeto como está e gravar no arquivo.

    console.log(escreverArquivo('./report.json', JSON.stringify(objetoRelatorio))); // Para escrever em um arquivo é necessário que com a função fs.writeFileSync() é necessário que o seja que vai escrever seja do tipo string, ou uma instance de um Buffer, TypedArray, ou DataView.
    // Por isso, precisamos do método JSON.stringfy() que vai transformar um Objeto JavaScript em uma string JSON.

} catch (erro) {

    console.error('Não foi possível completar a ação. Erro: ', erro);
}
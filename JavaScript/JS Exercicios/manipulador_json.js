const fs = require('fs'); // Importando para o código o módulo fs, para trabalharmos com arquivos. Abrir, ler, escrever e fechar arquivos.

/**

    Vamos organizar o nosso código criando: 
    
        - Uma função para Criar outro arquivo JSON.
        - Uma função para Ler o Arquivo.
        - E, por último, Escrever nesse Arquivo.  
**/

/**
 * 
 * @param {String} arq -> Nome do arquivo 
 */

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

// Usando uma estrutura try... catch... finally para pegar qualquer exceção que venha a dar ao tentar manipular o arquivo, 
// e principalment fechar o arquivo ao terminar o programa com o finally. 

try {

    let arquivoJson = './usuarios.json' // Nome do JSON que já temos.

    let conteudoJson = lerArquivo(arquivoJson);
    
    let objetoJson = JSON.parse(conteudoJson) // Utilizando do método parse para poder converter o conteúdo no arquivo em um Objeto JavaScript

    let artilheiro = new Array; // Array para atribuir os artilheiros do time.

    for (let jogadores of objetoJson["Artilheiros"]) { // O operador 'of' irá nos devolver o valor de "Artilheiros", que é um Array. 
                                                      // Neste momento, depois de convertidos, são outros objetos JS.
        artilheiro.push(jogadores.gols);              // Graças a isso, podemos utilizar uma Estrutura de Repetição para iterar por todo esse Array.
    }

    artilheiro.sort((b, a) => a - b); // Organizar o Array em ordem crescente, utilizando o método sort()
                                     // Seguindo melhores práticas dadas pelo SonarLint (regra: javascript:S2871) 
                                    // Para esse método não ter nenhuma surpresa, vamos providenciar uma função de comparação que retorna a ordem organizada. 

    let nomeArtilheiros = new Array; // Array que irá ter os nomes em ordem dos artilheiros

    let lesionados = new Array; // Array que irá a situação de lesão em ordem dos artilheiros

    let partidas = new Array; // Array que irá ter as partidas em ordem dos artilheiros

    for (let cont = 0; cont < 5; cont++) {

        for (let jogador of objetoJson["Artilheiros"]) {

            if (artilheiro[cont] == jogador.gols) { // Comparando com o Array (artilheiro) em ordem crescente, quem são os nomes dos Jogadores que correspodem aos gols em questão.

                nomeArtilheiros.push(jogador.nome);

                lesionados.push(jogador.lesionado);

                partidas.push(jogador.partidas);
            }
        }
    }

    // Vamos criar um Objeto JavaString com os dados dos 5 artilheiros do time em ordem.

    let objetoArtilheiro = new Object; // Vou usar a classe Object para construir esse Objeto

    // O REPORT SERÁ MONTADO, CONSIDERANDO AS SEGUINTES CONDIÇÕES:
        // Se o Jogador jogou mais ou exatas 40 jogos na temporado e está lesionado, terá a situação como 'Departamento Médico'. 
        // Se está lesionado, mas jogou menos de 40 partidas está em processo de 'Recuperação'.
        // Se não se lesionou, e jogou menos de 40 partidas, está 'Disponível'.
    
    for (let nomeJogador in nomeArtilheiros) {

        if (lesionados[nomeJogador] && partidas[nomeJogador] >= 40) {

            objetoArtilheiro[`${ nomeArtilheiros[nomeJogador] }`] = { gols: artilheiro[nomeJogador], situacao: 'Departamento Médico' }; // Novo Objeto JS contendo os 5 primeros artilheiros e sua situação para atuar, será se ele está lesionado ou não.
        
        } else if (lesionados[nomeJogador]) {

            objetoArtilheiro[`${ nomeArtilheiros[nomeJogador] }`] = { gols: artilheiro[nomeJogador], situacao: 'Processo de Recuperação' }; // Novo Objeto JS contendo os 5 primeros artilheiros e sua situação para atuar, será se ele está lesionado ou não.

        } else {

            objetoArtilheiro[`${ nomeArtilheiros[nomeJogador] }`] = { gols: artilheiro[nomeJogador], situacao: 'Disponível' }; // Novo Objeto JS contendo os 5 primeros artilheiros e sua situação para atuar, será se ele está lesionado ou não.
        }
    }

    // Poderia fazer igual ao JSON original no arquivo .json e fazer com que estes objetos JavaScript estivessem dentro de um Array. Mas acho que adicionaria um pouco mais de linha do que este exemplo simple pede. Por isso, vou deixar o Objeto como está e gravar no arquivo

    let novoArquivo = './report.json'; // Como vamos utilizar, e reutilizar bastante o nome/ caminho do arquivo, 
                                      // vou criar uma váriável atribuindo o nome do arquivo com o caminho onde ele está 

    console.log(escreverArquivo(novoArquivo, JSON.stringify(objetoArtilheiro))); // Para escrever em um arquivo é necessário que com a função fs.writeFileSync() é necessário que o seja que vai escrever seja do tipo string, ou uma instance de um Buffer, TypedArray, ou DataView.
    // Por isso, precisamos do método JSON.stringfy() que vai transformar um Objeto JavaScript em uma string JSON.

} catch (erro) {

    console.error('Não foi possível completar a ação. Erro: ', erro);

} //finally {

//     fs.close();
// }
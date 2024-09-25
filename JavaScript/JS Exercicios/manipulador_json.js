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

function criarArquivo(arq) {

    fs.open(arq, 'w+', function(err, f) {

        return [err, f];
    });
}

function lerArquivo(arq) {

    return fs.readFileSync(arq, 'utf8');

}

// Usando uma estrutura try... catch... finally para pegar qualquer exceção que venha a dar ao tentar manipular o arquivo, 
// e principalment fechar o arquivo ao terminar o programa com o finally. 

try {

    let arquivoJson = './usuarios.json' // Nome do JSON que já temos.

    let novoArquivo = './report.json' // Como vamos utilizar, e reutilizar bastante o nome/ caminho do arquivo, 
                                      // vou criar uma váriável atribuindo o nome do arquivo com o caminho onde ele está 

    let conteudoJson = lerArquivo(arquivoJson);
    
    // console.log(conteudoJson) // vamos ver se já tivemos sucesso em atribuir à uma variável o conteúdo do arquivo JSON.


    let objetoJson = JSON.parse(conteudoJson) // Utilizando do método parse para poder converter o conteúdo no arquivo em um Objeto JavaScript

    let artilheiro = new Array; // Array para atribuir os artilheiros do time.

    for (let jogadores of objetoJson["Artilheiros"]) { // O operador 'of' irá nos devolver o valor de "Artilheiros", que é um Array. 
                                                      // Neste momento, depois de convertidos, são outros objetos JS.
                             // Graças a isso, podemos utilizar uma Estrutura de Repetição para iterar por todo esse Array.

        artilheiro.push(jogadores.gols);
    }

    artilheiro.sort((b, a) => a - b); // Organizar o Array em ordem crescente, utilizando o método sort()
                                     // Seguindo melhores práticas dadas pelo SonarLint (regra: javascript:S2871) 
                                    // Para esse método não ter nenhuma surpresa, vamos providenciar uma função de comparação que retorna a ordem organizada. 

    let nomeArtilheiros = new Array; // Array que irá ter os nomes em ordem dos artilheiros

    for (let cont = 0; cont < 5; cont++) {

        for (let jogador of objetoJson["Artilheiros"]) {

            if (artilheiro[cont] == jogador.gols) { // Comparando com o Array (artilheiro) em ordem crescente, quem são os nomes dos Jogadores que correspodem aos gols em questão.

                nomeArtilheiros.push(jogador.nome)
            }
        }
    }

    // Vamos criar um Objeto JavaString com os dados dos 5 artilheiros do time em ordem.

    let objetoArtilheiro = new Map; // Vou usar a classe Map para construir esse Objeto, pois ela tem mais metódos disponiveis que facilitam a interação com o objetos.
                                   // Como os metódos getters() e setters() 

    for (let nomeJogador of nomeArtilheiros) {

        
    }

} catch (erro) {

    console.error('Não foi possível completar a ação. Erro: ', erro);

} 

// finally {

//     fs.close();
// }
const fs = require('fs'); 

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

try {

    let arquivoJson = './usuarios.json' 

    let conteudoJson = lerArquivo(arquivoJson);
    
    let objetoJson = JSON.parse(conteudoJson); 

    let artilheiro = new Array; 

    for (let jogadores of objetoJson["Artilheiros"]) { 
        artilheiro.push(jogadores.gols);
    }

    artilheiro.sort((b, a) => a - b); 

    let nomeArtilheiros = new Array; 

    let lesionados = new Array; 

    let partidas = new Array; 

    for (let cont = 0; cont < 5; cont++) {

        for (let jogador of objetoJson["Artilheiros"]) {

            if (artilheiro[cont] == jogador.gols) { 

                nomeArtilheiros.push(jogador.nome);

                lesionados.push(jogador.lesionado);

                partidas.push(jogador.partidas);
            }
        }
    }


    let objetoArtilheiro = new Object; 
    
    for (let nomeJogador in nomeArtilheiros) {

        if (lesionados[nomeJogador] && partidas[nomeJogador] >= 40) {

            objetoArtilheiro[`${ nomeArtilheiros[nomeJogador] }`] = { gols: artilheiro[nomeJogador], situacao: 'Departamento Médico' }; 
        
        } else if (lesionados[nomeJogador]) {

            objetoArtilheiro[`${ nomeArtilheiros[nomeJogador] }`] = { gols: artilheiro[nomeJogador], situacao: 'Processo de Recuperação' }; 

        } else {

            objetoArtilheiro[`${ nomeArtilheiros[nomeJogador] }`] = { gols: artilheiro[nomeJogador], situacao: 'Disponível' }; 
        }
    }

    let novoArquivo = './report.json'; // Como vamos utilizar, e reutilizar bastante o nome/ caminho do arquivo, 
                                      // vou criar uma váriável atribuindo o nome do arquivo com o caminho onde ele está 

    console.log(escreverArquivo(novoArquivo, JSON.stringify(objetoArtilheiro))); 

} catch (erro) {

    console.error('Não foi possível completar a ação. Erro: ', erro);
}
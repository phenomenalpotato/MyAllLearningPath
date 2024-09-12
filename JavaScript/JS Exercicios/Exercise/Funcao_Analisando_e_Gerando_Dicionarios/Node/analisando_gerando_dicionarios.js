/**
 * -> notas é uma função para receber várias médias de vários alunos e organiza-las em um map por ordem. 
 * @param {Boolean} sit Vai mostrar ou não a situção da media dos alunos
 * @param  {...any} notas Parametro para as N notas de N Alunos
 * @returns MAP Object com os dados dos Alunos organizados
 */
function notas(sit=false, ...notas) {

    let dicNotas = new Map;

    let maior = 0;

    let media = 0;

    let menor = notas[0];

    dicNotas.set('total', notas.length);

    for (let values of notas) {

        if (values >= maior) {

            maior = values.toFixed(2);
        }

        if (values <= menor) {

            menor = values.toFixed(2);
        }

        media += values;
    }

    dicNotas.set('maior', maior);

    dicNotas.set('menor', menor);

    dicNotas.set('media', (media / notas.length).toFixed(3));

    if (sit) {

        if (dicNotas.get("media") < 5) {

            dicNotas.set('situação', 'RUIM');
        
        } else if (dicNotas.get("media") < 7) {

            dicNotas.set('situação', "RAZOÁVEL");
        
        } else {

            dicNotas.set('situação', "BOA");
        }
    } 

    return dicNotas;
}

console.log(notas(true, 5.5, 2.5, 1.5));
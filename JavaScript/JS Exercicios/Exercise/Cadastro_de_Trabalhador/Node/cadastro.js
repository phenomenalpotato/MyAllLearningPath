const prompt = require('prompt-sync')();

let data = new Date;

let cadastroTrabalhador = new Map;

cadastroTrabalhador.set("nome", prompt('Nome: '));

cadastroTrabalhador.set("anoNascimento", Number(prompt('Ano de Nascimento: ')));

cadastroTrabalhador.set("idade", data.getFullYear() - cadastroTrabalhador.get("anoNascimento"));

cadastroTrabalhador.set("carteiraDeTrabalho", Number(prompt('Carteira de Trabalho (0 não tem): ')));

if (cadastroTrabalhador.get("carteiraDeTrabalho") == 0) {

    for (let [info, trabalhador] of cadastroTrabalhador) {

        if (info != "anoNascimento") {

            console.log(`- ${info} tem o valor ${trabalhador}`);
        }
    }

} else {

    cadastroTrabalhador.set("anoContratacao", Number(prompt('Ano de Contratação: ')));

    cadastroTrabalhador.set("salario", Number(prompt('Salário: R$')).toFixed(2));

    cadastroTrabalhador.set("aposentadoria", (cadastroTrabalhador.get("anoContratacao") - cadastroTrabalhador.get("anoNascimento") + 35));

    for (let [informacao, trabalhadorAtualizado] of cadastroTrabalhador) {

        if (informacao != "anoNascimento") {

            console.log(`- ${informacao} tem o valor ${trabalhadorAtualizado}`);
        }
    }
}
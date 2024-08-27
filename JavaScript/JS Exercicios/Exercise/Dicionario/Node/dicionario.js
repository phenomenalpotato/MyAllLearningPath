const prompt = require('prompt-sync')();

let aluno = new Map();

aluno.set("nome", prompt('Nome: '));

aluno.set("media", Number(prompt(`Média de ${aluno.get("nome")}: `)));

if (aluno.get("media") >= 7) {

    aluno.set("situação", "Aprovado");

} else if (aluno.get("media") >= 5) {

    aluno.set("situação", "Recuperação");

} else {

    aluno.set("situação", "Reprovado");
}

console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-');

for (let [key, value] of aluno) {

    console.log(`- ${key} é igual a ${value}`);
}
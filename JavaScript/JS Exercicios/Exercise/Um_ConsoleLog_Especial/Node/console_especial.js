function escreva(msg) {

    let repetindo = Number(msg.length) + 4;

    console.log('~'.repeat(repetindo));

    console.log(`  ${msg}`);

    console.log('~'.repeat(repetindo));
}

escreva("Gustavo Guanabara");

escreva("Curso de JavaScript no Youtube");

escreva("CeV");
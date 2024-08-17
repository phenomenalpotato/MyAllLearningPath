let arrayPalavras = ['APRENDER', 'PROGRAMAR', 'LINGUAGEM', 'PYTHON', 'CURSO', 'GRÁTIS', 'ESTUDAR', 'PRATICAR', 'TRABALHAR', 'MERCADO', 
    'PROGRAMADOR', 'FUTURO',];

for (let palavras of arrayPalavras) {

    process.stdout.write(`Na palavra ${palavras} temo(s) as vogai(s) `);

    for (let letras of palavras) {

        if (letras == 'A' || letras == 'E' || letras == 'I' || letras == 'O' || letras == 'U' || letras == 'Á' || letras == 'É') {
            
            process.stdout.write(` - ${letras}`); 
        }
    }
    process.stdout.write('\n');
}
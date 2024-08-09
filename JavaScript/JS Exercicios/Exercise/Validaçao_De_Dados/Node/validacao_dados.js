const prompt = require('prompt-sync')();

let sexoUser = prompt('Informe o seu sexo: ').trim().toUpperCase().charAt(0);

let userValidacao = true;

while (userValidacao) {

    if (sexoUser == 'M' || sexoUser == 'F') {

      userValidacao = false;

    } else {
    
        sexoUser = prompt('Dados inválidos. Por favor, informe o seu sexo: ').trim().toUpperCase().charAt(0);

    }
};

console.log(`Sexo ${sexoUser} registrado com sucesso!`);
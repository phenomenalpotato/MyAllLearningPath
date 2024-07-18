/* Node handles JS tasks by running asynchronously, which means that reading user input drom a terminal isn't as simple as calling a getInput() function. */  

const readline = require('node:readline'); /* the require() function is a integral part of the CommonJS module system. This function allows you to include and use 
                                            external modules or files in your JS code, which helps your code organized and maintainable. Node uses this function
                                            to load a module.*/

const rl = readline.createInterface({

    input: process.stdin,
    output: process.stdout,
});

rl.question('Qual o seu nome: ', nome => {

    console.log(`O seu nome é ${nome}!`);

    rl.close(); // Fecha a Interface com o usuário no terminal
});

/* O pedaço de código acima pergunta para o usuário o seu nome, e uma vez que o texto é entrado e o user preciona Enter, manda uma saudação.*/

/* O metodo question() mostra o primeiro parametro (uma questão) e aguarda pelo input do user. Então faz a chamada da callback function uma vez a tecla pressionada.

E nessa callback function, fechamos a interface readline. */
const prompt = require('prompt-sync')(); // Os parenteses () extras apos (prompt-sync) é pq esse modulo em especifico que cria uma função que cria prompts functions, então precisa chamar prompt-sync em ordem de pegar a função que ira fazer o prompt.

const n1 = Number(prompt('Qual o primeiro numero: '));

const n2 = Number(prompt('Qual o segundo número: '));

console.log(`A soma entre os dois numero é: ${n1 + n2}`);
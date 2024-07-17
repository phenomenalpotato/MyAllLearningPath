let num = [5, 8, 2, 9, 3];

console.log(num)

// console.log(`Nosso vetor é ${num}`);

// num.push(1) // Para acresentar um novo elemento no array sem perder nenhum dos valores já atribuidos a ele anteriormente na definição dele.

// num.sort();

// console.log(num[0]);

let posi = num.indexOf(3) // Tentando achar a chave do elemento no array 'num' que tenha o valor '8', e se esse valor existe no array

let resul = posi == -1 ? 'Não existe' : `A chave do valor é ${posi}`; /* Se o método retornar -1, ou seja, que não exsite tal elemento pesquisado, 
aqui sera verdade e vai retornar a string "Não existe". Se for false, ou seja, não retornar '-1' e sim a chave do elemento vai retornar a string 
`A chave do valor é ${posi}` atribuindo para a variavel resul */

// console.log(`A chave do valor é ${posi}`); 

console.log(resul);

console.log(`Esse é o tamanho do meu Vetor num: ${num.length}`);
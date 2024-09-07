const prompt = require('prompt-sync')();

// // // Criar um programa que deixe o usuario sacar um determinado valor no caixa com notas de 200, 100, 50, 20, 10, 5, 2

// // let saqueUser = Number(prompt('Quanto quer sacar: R$ '));

// // let totalOperacao = saqueUser;

// // let cedula = 200;

// // let quantidadeCedulas = 0;

// // while (true) {

// //     if (totalOperacao >= cedula) {
        
// //         totalOperacao -= cedula;

// //         quantidadeCedulas++;
    
// //     } else {

// //         if (quantidadeCedulas > 0) {

// //         console.log(`Você sacou ${quantidadeCedulas} nota(s) de R$${cedula}`);
        
// //         }
        
// //         if (totalOperacao == 0) {

// //             break;
        
// //         } else if (cedula == 200) {

// //             cedula = 100;
                    
// //         } else if (cedula == 100) {

// //             cedula = 50;
        
// //         } else if (cedula == 50) {

// //             cedula = 20;

// //         } else if (cedula == 20) {

// //             cedula = 10;

// //         } else if (cedula == 10) {

// //             cedula = 5;
        
// //         } else if (cedula == 5) {

// //             cedula = 2;

// //         } else if (cedula == 2) {

// //             cedula = 1;
// //         }

// //         quantidadeCedulas = 0;
    
// //     }

// // }


// // --------------------------------------


// let saqueUser = Number(prompt('Quanto quer sacar: R$ '));

// let cedula = 200;

// // let operacaoTotal = 0;

// let quantidadeCedulas = 0;

// while (true) {

//     if (cedula <= saqueUser) {

//         saqueUser -= cedula;

//         quantidadeCedulas++;
    
//     } else {

//         if (quantidadeCedulas > 0) {

//             console.log(`Foram retirada(s) ${quantidadeCedulas} cedula(s) de ${cedula} da sua conta bancaria!`);
//         }
        
//         if(saqueUser == 0) {

//             break;
        
//         } else if (cedula == 200) {

//             cedula = 100;

//         } else if (cedula == 100) {

//             cedula = 50;
        
//         } else if (cedula == 50) {

//             cedula = 20;
    
//         } else if (cedula == 20) {

//             cedula = 10;

//         } else if (cedula == 10) {

//             cedula = 5;

//         } else if (cedula == 5) {

//             cedula = 2;

//         } else if (cedula == 2) {

//             cedula = 1;
//         }
     

//         quantidadeCedulas = 0;
//     }

// }

// let lanche = ['Hambúrguer', 'Suco', 'Pizza', 'Pudim'];

// console.log(`${lanche.slice(1, 4)}`);

// lanche[3] = 'Alface'

// console.log(`${lanche.slice(1, 4)}`);

// for (let comida in lanche) {

//     console.log(`Eu vou comer ${lanche[comida]} agora! Na posição ${comida}`);
// } 

// console.log('---------==================');

// for (comida of lanche.toSorted((a, b) => a.localeCompare(b))) {

//     console.log(`Eu vou comer ${comida} nesse momento!`);
// }

// console.log('---------==================');

// let a = [2, 5, 4];

// let b = [5, 8, 1,'All'];

// let c = a + b;

// console.log(`${a}, ${b} ----> ${c}`);

// delete b[3];

// b.splice(3);

// console.log(`${b}`);

// let num = [2, 5, 9, 1];

// num[2] = 3;

// num[4] = 8

// num.sort()

// num.reverse()

// console.log(num)

// num.pop()

// console.log(num.length, num)

// for (numeros in num) {

//     console.log(`Na posição ${numeros} encontrei o valor ${num[numeros]}`);
// }

// let teste = [];

// teste.push('Gustavo');

// teste.push(40);

// let galera = [];

// galera.push(teste.slice());

// teste[0] = 'Maria';

// teste[1] = 22;

// galera.push(teste.slice());

// let galera = [['João', 19], ['Ana', 33], ['Joaquim', 13], ['Maria', 45]];

// console.log(`${galera} --- ${galera[2][1]}`);

// let galera = [];

// let dados = [];

// for (let cont = 0; cont < 3; cont++) {

//     dados.push(prompt('Qual o nome: '));

//     dados.push(prompt('Qual a idade: '));

//     galera.push(dados.slice());

//     dados.splice(0, 2);

//     // console.log(`${dados}`)
// }

// // console.log(`${galera}`)

// for (let pessoa of galera) {

//     if (pessoa[1] > 21) {

//         console.log(`${pessoa[0]} tem ${pessoa[1]} anos`);
//     }

//     // console.log(`${pessoa}`)
// }

let pessoas = new Map();

pessoas.set("nome", "Gustavo");
pessoas.set("sexo", "M");
pessoas.set("idade", 22);

// console.log(pessoas.get("nome"), pessoas.get("sexo"));

// console.log(`${pessoas.get("nome")} tem ${pessoas.get("idade")} anos`);

// console.log(pessoas.keys());

// console.log(pessoas.values());

// console.log(pessoas.entries());

// for (let chaves of pessoas.keys()) {

//     console.log(chaves);
// }

// for (let valores of pessoas.values()) {

//     console.log(valores);
// }

// for (let itens of pessoas.entries()) {

//     console.log(itens);
// }

// let test = pessoas.entries()

// console.log(test.next().value)

// console.log(test.next().value)

// pessoas.clear();

// pessoas.delete("sexo");

// pessoas.set("nome", "Jorge");

// pessoas.set("peso", 98.5);

// for (let pessoa of pessoas.entries()) {

//     console.log(pessoa[0] + " = " + pessoa[1]);
// }

// let estado1 = new Map();

// let estado2 = new Map();

// let brasil = new Array();

// estado1.set("uf", "Rio de Janeiro");

// estado1.set("sigla", "RJ");

// estado2.set("uf", "São Paulo");

// estado2.set("sigla", "SP");

// brasil.push(estado1);

// brasil.push(estado2);

// console.log(brasil);

// console.log(brasil[0].get("uf"), brasil[1].get("sigla"));

// let estado = new Map();

// let brasil = new Array();

// for (let cont = 0; cont < 3; cont++ ) {

//     // estado.set("uf", prompt('Unidade Federativa: '));
//     estado.set("sigla", prompt('Sigla do Estado: '));

//     // estado["sigla"] = [prompt('Sigla do Estado: ')];

//     brasil.push(estado.values());
//     brasil.push(estado.keys())

//     // estado.delete("sigla");
// }

// console.log(brasil);

// for (let estados of brasil) {

//     // console.log(estados.next().value);

//     console.log(estados);
// }

// function soma(a=0, b=0) {

//     console.log(`A = ${a} e B = ${b}`)
//     let s = a + b
    
//     return(s)
// }

// soma(4,5)
// soma(8,9)
// soma(b=2,a=1) // não funciona 
// soma(2)



// function contador(...num) {

//     // for(let n of num) {

//     //     console.log(n);
//     // }

//     console.log(`Recebi nessa chamada os valores ${num}`);
// }

// contador(2,1,7)
// contador(1,2)
// contador(1,2,6,8,10,1000)


// function dobra(item, index, arr) {

//     arr[index] = item * 2
// }

// let valores = [6,3,9,1,0,2];

// valores.forEach(dobra)

// console.log(valores);

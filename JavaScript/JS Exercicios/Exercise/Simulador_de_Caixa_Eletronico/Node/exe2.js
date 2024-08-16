// const prompt = require('prompt-sync')();

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

let lanche = ['Hambúrguer', 'Suco', 'Pizza', 'Pudim'];

console.log(`${lanche.slice(1, 4)}`);

lanche[3] = 'Alface'

console.log(`${lanche.slice(1, 4)}`);

for (let comida in lanche) {

    console.log(`Eu vou comer ${lanche[comida]} agora! Na posição ${comida}`);
} 

console.log('---------==================');

for (comida of lanche.toSorted((a, b) => a.localeCompare(b))) {

    console.log(`Eu vou comer ${comida} nesse momento!`);
}

console.log('---------==================');

let a = [2, 5, 4];

let b = [5, 8, 1,'All'];

let c = a + b;

console.log(`${a}, ${b} ----> ${c}`);

// delete b[3];

b.splice(3);

console.log(`${b}`);
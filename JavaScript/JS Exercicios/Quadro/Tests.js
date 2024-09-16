// const prompt = require('./Exercise/Analisador_Texto/Node/node_modules/prompt-sync')();

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

// let pessoas = new Map();

// pessoas.set("nome", "Gustavo");
// pessoas.set("sexo", "M");
// pessoas.set("idade", 22);

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


// function soma(a=0,b=0,c=0) {

//     let somar = a+b+c;

//     console.log(`A soma entre ${a}, ${b} e ${c} é ${somar}`);
// }

// soma(3,2,5)
// soma(3,2)
// soma(3)
// soma()

// function teste () {

//     let x = 8

//     console.log(`Na função teste() n = ${n}`)

//     console.log(`Na função teste() x=${x}`);
// }

// let n = 2

// console.log(`No programa principal n = ${n}`);

// console.log(`No programa principal x = ${x}`);

// teste();

// function funcao () {

    // n1 = 4 // NO JS como ele vc tem que declarar a variável, se não declarar ela, a var será tratada como global. 
    // E mesmo n1 estando na func funcao ela vai ser 4 a partir de quando essa func for chamada 

    //let n1 = 4 // Agora temos uma variavel local pois acabamos de declarar ela dentro da func funcao. E mesmo uma var n1 já existir
    // no programa principal, cada um vai ter seu valor separado e escopo diferente.

//     console.log(`N1 dentro vale ${n1}`);
// }

// let n1 = 2;

// funcao()

// console.log(`N1 fora vale ${n1}`);

// function somar(a=0,b=0,c=0) {
//     let s = a+b+c;

//     return s;
// }

// let r1 = somar(3,2,5);
// let r2 = somar(2,2)
// let r3 = somar(6)

// console.log(`Os resultados foram ${r1}, ${r2} e ${r3}`);

// function fatorial(num = 1) {

//     let f = 1;

//     for (; num > 0; num-=1) {

//         f*=num;
//     }

//     return f;
// }

// // let n = Number(prompt('Digite um número: '));

// // console.log(`O fatorial de ${n} é igual a ${fatorial(n)}`);

// let f1 = fatorial(5)

// let f2 = fatorial(4)

// let f3 = fatorial()

// console.log(`Os resultados são ${f1}, ${f2} e ${f3}`);


// function par(n=0) {

//     if (n % 2 == 0) {

//         return true;
    
//     } else {

//         return false;
//     } 
// }

// let num = Number(prompt('Digite um número: '));

// console.log(`O numero é par? ${par(num)}`);

// if (par(num)) {

//     console.log('É par!');
// } else {

//     console.log('É impar!');
// }

// let user = {

//     first_name: "Sammy",
//     last_name : "shark",
//     online    : true,
//     full_name : function() {

//         return this.first_name + " " + this.last_name;
//     }
// };

// console.log(user.full_name(), user.online);

// let sammy = {

//     "first_name": "Sammy",
//     "last_name" : "shark",
//     "online"    : true
// }

// console.log(sammy.first_name, sammy.last_name, sammy["online"]);

// let user_profile = {

//     "user_name": sammy.first_name + sammy.last_name,
//     "social_media": [

//         {
//             "description": "twitter",
//             "link"       : "https://twitter.com/digitalocean"
//         },
//         {
//             "description": "facebook",
//             "link"       : "https://www.facebook.com/DigitalOceanCloudHosting"
//         },
//         {
//             "description": "github",
//             "link"       : "https://github.com/digitalocean"
//         }
//     ]
// }

// console.log(`O user ${user_profile.user_name} tem o seguinte perfil no Facebook ${user_profile.social_media[1].link}`);

// let obj = {"first_name": "Sammy", "last_name": "Shark", "online": true};

// let s = JSON.stringify(obj)

// console.log(typeof(s),s.first_name); // Não consegue acessar os atributos dentro do objeto pq é uma String

// let o = JSON.parse(s)

// console.log(typeof(o), o.first_name); // COnsegue acessar os atributos pq é um objeto JSON

// let users = {

//     "Sammy" : {

//         "username"  : "sammyshark",
//         "location"  : "Indian Ocean",
//         "online"    : true,
//         "followera" : 987 
//     },

//     "Jesse" : {

//         "username"  : "JesseOctopus",
//         "location"  : "Pacific Ocean",
//         "online"    : false,
//         "followers" : 432
//     },

//     "Drew" : {

//         "username"  : "DrewSquid",
//         "location"  : "Atlantic Ocean",
//         "online"    : false,
//         "followers" : 321
//     },

//     "Jamie" : {

//         "username"  : "JamieMantisShrimp",
//         "location"  : "Pacific Ocean",
//         "online"    : true,
//         "followers" : 654
//     }
// }

// // console.log(users.Sammy.username, users.Drew.location);

// // let s = JSON.stringify(users);

// // console.log(JSON.parse(s));


// let sammyEx2 = {

//     "first_name" : "Sammy",
//     "last_name"  : "Shark",
//     "online"     : true,
//     "websites"   : [

//         {
//             "description" : "work",
//             "URL"         : "https://digitalocean.com/"
//         },

//         {
//             "description" : "tutorials",
//             "URL"         : "https://digitalocean.com/community/tutorials"
//         }
//     ],

//     "social_media" : [

//         {
//             "description" : "twitter",
//             "link"        : "https://twitter.com/digitalocean"
//         },
//         {
//             "description" : "facebook",
//             "link"        : "https://www.facebook.com/DigitalOceanCloudHosting"
//         },
//         {
//             "description" : "github",
//             "link"        : "https://github.com/digitalocean"
//         }
//     ]
// }

// console.log(sammyEx2.websites[1].URL + " - " + sammyEx2.social_media[2].link)

// function jogadoreDic (nomeJ, golsJ, timesJ=0) {

//     let tempJ = new Map;

//     tempJ.set("nome", nomeJ);

//     tempJ.set("gols", golsJ);

//     tempJ.set("times", timesJ);

//     return tempJ;

// }

// let jogadores = new Map;

// let jogadoresArray = [];

// while (true) {

//     let nome = prompt('Qual o nome do Jogador: ');

//     let gols = Number(prompt('Quantos gols o jogador fez: '));

//     let times = new Array;

//     while (true) {

//         times.push(prompt('Nome do Time: '));

//         let desicaoUser = prompt('O jogador jogou em mais um time? Sim ou Não: ').trim().charAt(0).toUpperCase();

//         if (desicaoUser == 'N') {
    
//             break;
//         }
//     }

//     // jogadores.set(`jogador${nome}`, jogadoreDic(nome, gols, times));

//     jogadoresArray.push(jogadoreDic(nome, gols, times));

//     let desicaoUser = prompt('Quer criar mais um jogador? Sim ou Não: ').trim().charAt(0).toUpperCase();

//     if (desicaoUser == 'N') {

//         jogadores.set("jogadores", jogadoresArray.slice());

//         break;
//     }
// }

// console.log(jogadores);


const {fatorial, dobro} = require('./uteis'); // Só funciona com o module.exports no módulo

// import { fatorial } from "./uteis.js" // Só funciona com o exports na função no modulo 

// let numero = Number(prompt('Digite um número: '));

// let fat = fatorial(5)

let fat = fatorial(5);

let dome = dobro(4);

console.log(fat, dome);

// console.log(`O fatorial de ${numero} é ${fat}`);

// console.log(`O triplo de ${numero} é ${triplo(numero)} e o dobro é ${dobro(numero)}`);
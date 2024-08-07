// for (let cont = 10; cont >= 0; cont--) {

//     console.log(`${cont}`);
// }

let numeros = [0,1,2,3,4,5,6,7,8,9,10];

// console.log(`${c in numeros}`);

// for (let c in numeros) { 

//     console.log(`${c} -- ${numeros.toReversed()[c]}`)

//     // console.log(`${numeros}`)


// }


for(const cont of numeros.toReversed()) {

    console.log(`${cont}`)
}


// for (const cont of numeros.keys()) { // retorno os indexs do array

//     console.log(`${cont}`);

// }

// for (const [c, value] of numeros.entries()) { // retorna um iterable das chaves e valores do array

//     console.log(`${c}, = ${value}`);
// }
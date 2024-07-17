var idade = 64;

console.log(`Sua idade é de ${idade} anos`);

// if (idade <= 15) {

//     console.log('Menor de idade, não vota');

// } else {

//     if (idade == 16 || idade == 17) {

//         console.log('Voto opcional');

//     }
    

//     if(idade >= 18) {

//         console.log('Maior de idade, vota');

//     }
// }

if (idade < 16) {

    console.log('Menor de idade, não vota');

} else if (idade < 18 || idade >= 65 ) {

    console.log('Voto opcional');

} else {

    console.log('Voto é obrigatorio'); 

}
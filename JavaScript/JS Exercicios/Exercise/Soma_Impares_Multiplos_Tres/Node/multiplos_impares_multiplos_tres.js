let somaTotal = 0;

let quantidade = 0;

for (let cont = 3; cont <= 500; cont+=3) {

    if (cont % 2 != 0) {

        somaTotal += cont;

        quantidade++;

        // console.log(`${cont} -- ${somaTotal}`);

    }

}

console.log(`O total da soma foi = ${somaTotal} - E o total de números Somados foram = ${quantidade}`);
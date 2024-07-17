function parimpar(n) {

    if(n % 2 == 0) {

        return 'Par'

    } else {

        return 'Impar'
    }
}

let resul = parimpar(1);

console.log(`O resultado do numero escolhido é: ${resul}`);
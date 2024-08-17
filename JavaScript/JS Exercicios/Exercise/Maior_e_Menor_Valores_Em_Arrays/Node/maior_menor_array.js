function getRandomInt(max = 0) {

    return Math.floor(Math.random() * max);
}

let numGerados = [];

for (let cont = 0; cont < 5; cont++) {

    numGerados.push(getRandomInt(10));
}

console.log(`Os valores sorteados foram: ${numGerados}`);

let arrayOrdem = numGerados.toSorted((a, b) => (a - b));

console.log(`O menor valor sorteado foi ${arrayOrdem[0]} - E o maior valor foi ${arrayOrdem[numGerados.length - 1]}`);
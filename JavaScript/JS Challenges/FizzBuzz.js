function fizzBuzzArray(qtd) {
  let arrFinal = [];

  for (let i = 1; i <= qtd; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      arrFinal.push("FizzBuzz");
    } else if (i % 5 === 0) {
      arrFinal.push("Buzz");
    } else if (i % 3 === 0) {
      arrFinal.push("Fizz");
    } else {
      arrFinal.push(i);
    }
  }

  return arrFinal;
}

console.log(fizzBuzzArray(15));

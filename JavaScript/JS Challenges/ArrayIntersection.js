function arrayIntersection(firstArr, secondArr) {
  let thirdArr = [];

  for (let numPrimeiroArr of firstArr) {
    for (let numSegundoArr of secondArr) {
      if (
        numPrimeiroArr === numSegundoArr &&
        !thirdArr.includes(numPrimeiroArr)
      ) {
        thirdArr.push(numPrimeiroArr);
        break;
      }
    }
  }

  return thirdArr;
}

console.log(arrayIntersection([1, 2, 3, 4, 5, 3, 5], [3, 4, 5, 6, 7, 3]));

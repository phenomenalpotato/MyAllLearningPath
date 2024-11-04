function findMaxNumber(arr) {
  let maxNumber = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > maxNumber) {
      maxNumber = arr[i];
    }
  }

  return maxNumber;
}

const arrNumbers = [1, 2, 10, 2, 123, 11, 1, 777, 3, 222];

console.log(findMaxNumber(arrNumbers));

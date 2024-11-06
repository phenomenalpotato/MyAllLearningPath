function removeDuplicates(arr) {
  let novoArray = arr.slice();
  for (let membros = 0; membros < novoArray.length; membros++) {
    for (let vezes = novoArray.length - 1; vezes >= 0; vezes--) {
      if (novoArray[membros] === novoArray[vezes]) {
        if (membros === vezes) {
          break;
        }
        novoArray.splice(vezes, 1);
      }
    }
  }

  return novoArray;
}

let arrValores = [true, true, false, true, false];

console.log(removeDuplicates(arrValores));

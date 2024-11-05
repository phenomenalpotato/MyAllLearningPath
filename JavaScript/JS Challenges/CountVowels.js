function countVowels(frase) {
  const vogais = ["a", "e", "i", "o", "u"];

  let cont = 0;

  frase = frase.toLowerCase();

  for (let letra of frase) {
    for (let vogal of vogais) {
      if (letra === vogal) {
        cont++;
        break;
      }
    }
  }

  return cont;
}

console.log(countVowels("Coding Challenge"));

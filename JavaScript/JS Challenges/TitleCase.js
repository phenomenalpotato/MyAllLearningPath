function titleCase(frase) {
  let novaFrase = frase[0].toUpperCase();

  for (let i = 1; i < frase.length; i++) {
    if (frase[i - 1] === " ") {
      novaFrase += " " + frase[i].toUpperCase();
    } else {
      novaFrase += frase[i].toLowerCase();
    }
  }

  return novaFrase;
}

console.log(titleCase("hERE IS MY HANDLE HERE IS MY SPOUT"));

function countOcurrence(palavra, carac) {
  let numVezes = 0;

  for (let letra of palavra) {
    if (letra === carac) {
      numVezes++;
    }
  }
  return numVezes;
}

const vezesPalavra = countOcurrence("hello", "z");

countOcurrence(
  "Transitores irão implmentar o conceito De portões lógicos em um conjunto, chamado circuito.",
  "d"
);

console.log(vezesPalavra);

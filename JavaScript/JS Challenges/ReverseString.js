function reverseString(frase) {
  let novaFrase = "";

  for (let i = frase.length; i > 0; i--) {
    novaFrase += frase[i - 1];
  }

  return novaFrase;
}

console.log(reverseString("hello world"));

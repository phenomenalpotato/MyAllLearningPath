function isPalindrome(frase) {
  let fraseContrario = "";

  for (let i = frase.length - 1; i >= 0; i--) {
    fraseContrario += frase[i];
  }

  return (
    fraseContrario
      .toUpperCase()
      .trim()
      .replace(/[\W\d]/g, "") ===
    frase
      .toUpperCase()
      .trim()
      .replace(/[\W\d]/g, "")
  );
}

console.log(isPalindrome("Hello"));

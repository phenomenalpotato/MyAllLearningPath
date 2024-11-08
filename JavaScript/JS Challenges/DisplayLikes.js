function displayLikes(arrLikes) {
  if (arrLikes.length >= 4) {
    return (
      arrLikes[0] +
      ", " +
      arrLikes[1] +
      " and " +
      (arrLikes.length - 2) +
      " others like this"
    );
  } else if (arrLikes.length === 1) {
    return `${arrLikes[0]} likes this`;
  } else if (arrLikes.length === 2) {
    return arrLikes[0] + " and " + arrLikes[1] + " like this";
  } else if (arrLikes.length === 3) {
    return (
      arrLikes[0] + ", " + arrLikes[1] + " and " + arrLikes[2] + " like this"
    );
  } else {
    return "No one likes this";
  }
}

console.log(displayLikes(["Peter", "Alice", "Nandy", "Jill", "Morales"]));

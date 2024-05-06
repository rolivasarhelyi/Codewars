//Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.
//If the argument is itself not a perfect square then return either -1 or an empty value like None or null, depending on your language. You may assume the argument is non-negative.
function findNextSquare(sq) {
  let sqrt = Math.sqrt(sq);
  if (sqrt % 1 != 0) {
    return -1;
  } else {
    return (sqrt + 1) ** 2;
  }
}

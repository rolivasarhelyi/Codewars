//Given an integral number, determine if it's a square number
let isSquare = function (n) {
  return n < 0 || Math.sqrt(n) % 1 != 0 ? false : true;
};

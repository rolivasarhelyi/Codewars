//Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.
function between(a, b) {
  const final = [];
  for (let i = a; i <= b; i++) {
    final.push(i);
  }
  return final;
}

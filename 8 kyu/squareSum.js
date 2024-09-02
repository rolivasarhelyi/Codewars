//Complete the square sum function so that it squares each number passed into it and then sums the results together.
function squareSum(numbers) {
  const result = numbers.map((n) => n * n);
  return result.reduce((acc, curr) => acc + curr, 0);
}

//Given an array of ones and zeroes, convert the equivalent binary value to an integer.
//Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.
const binaryArrayToNumber = (arr) => {
  let sum = 0;
  let exp = 0;
  arr
    .slice()
    .reverse()
    .forEach((e) => {
      sum += 2 ** exp * e;
      exp++;
    });
  return sum;
};

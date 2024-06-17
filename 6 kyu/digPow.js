function digPow(n, p) {
  let numberToArr = n.toString().split('');
  let length = numberToArr.length;
  let result = 0;
  console.log(numberToArr);
  for (let i = 0; i < length; i++) {
    result += Math.pow(Number(numberToArr[i]), p);
    p++;
  }

  let x = Math.pow(n, p);

  if (result === x) {
    return p;
  } else if (result % n === 0) {
    return result / n;
  } else {
    return -1;
  }
}

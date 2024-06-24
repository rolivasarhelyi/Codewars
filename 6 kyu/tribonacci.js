function tribonacci(signature, n) {
  if (n > 2) {
    for (let i = 2; signature.length < n; i++) {
      signature.push(signature[i - 2] + signature[i - 1] + signature[i]);
    }
    return signature;
  } else if (n > 0) {
    return signature.slice(-n);
  } else return [];
}

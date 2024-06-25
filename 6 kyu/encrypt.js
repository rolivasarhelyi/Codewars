function encrypt(text, n) {
  let result = text.split('');
  let oddChars = result.filter((_, index) => index % 2 !== 0);
  let evenChars = result.filter((_, index) => index % 2 === 0);

  for (let i = 0; i < n; i++) {
    result = oddChars.join('') + evenChars.join('');
    oddChars = result.split('').filter((_, index) => index % 2 !== 0);
    evenChars = result.split('').filter((_, index) => index % 2 === 0);
  }
  return result;
}

function decrypt(encryptedText, n) {}

console.log(encrypt('This is a test!', 1));

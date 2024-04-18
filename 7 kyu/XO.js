//Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.
function XO(str) {
  let input = str.toLowerCase();
  input = input.split('');
  let xCounter = 0;
  let oCounter = 0;
  for (let i = 0; i < input.length; i++) {
    if (input[i] === 'o') {
      oCounter++;
    } else if (input[i] === 'x') {
      xCounter++;
    }
  }
  return xCounter === oCounter ? true : false;
}

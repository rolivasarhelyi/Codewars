// The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.
// What if the string is empty? Then the result should be empty object literal, {}.
function count(string) {
  let obj = {};
  let str = string.split('');
  str.forEach((e) => {
    if (e in obj) {
      obj[e] += 1;
    } else {
      obj[e] = 1;
    }
  });
  return obj;
}

// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

function duplicateEncode(word) {
  const wordObj = {};
  const wordArr = word.toLowerCase().split('');
  wordArr.forEach((e) => {
    if (e in wordObj) {
      wordObj[e] += 1;
    } else {
      wordObj[e] = 1;
    }
  });
  let finalStr = '';
  wordArr.forEach((e) => {
    if (wordObj[e] > 1) {
      finalStr += ')';
    } else {
      finalStr += '(';
    }
  });
  return finalStr;
}

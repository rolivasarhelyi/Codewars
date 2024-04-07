function solution(str) {
  let splitString = str.split('');
  let reversed = splitString.reverse();
  let joined = reversed.join('');
  return joined;
}

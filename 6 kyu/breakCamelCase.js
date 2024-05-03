//Complete the solution so that the function will break up camel casing, using a space between words.
function solution(string) {
  string = string.split('').map(function (el) {
    if (el === el.toUpperCase()) {
      el = ' ' + el;
    }
    return el;
  });
  return string.join('');
}

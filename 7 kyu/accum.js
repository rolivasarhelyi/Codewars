// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
function accum(s) {
  const string = s.split('');
  let newString = string.map(
    (e, i) => `${e.toUpperCase()}${e.toLowerCase().repeat(i)}`
  );
  newString = newString.join('-');

  return newString;
}

//Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).
function stringEndsWith(start, end) {
  if (start.substr(-end.length) === end) {
    return true;
  } else {
    return false;
  }
}

const start = 'abcde';
const end = 'cd';

console.log(stringEndsWith(start, end));

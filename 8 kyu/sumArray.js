//Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).
//The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.
function sumArray(array) {
  if (!Array.isArray(array) || !array.length || array.length <= 2) {
    return 0;
  } else {
    function compare(a, b) {
      return a - b;
    }

    array.sort(compare);
    array.shift();
    array.pop();

    let sum = 0;

    array.forEach(function (a) {
      sum += a;
    });

    return sum;
  }
}

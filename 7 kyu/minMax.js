//Write a function that returns both the minimum and maximum number of the given list/array.
function minMax(arr) {
  let min = arr[0];
  let max = arr[arr.length - 1];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
    if (arr[i] > max) {
      max = arr[i];
    }
  }

  return [min, max];
}

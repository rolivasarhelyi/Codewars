//Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are multiple elements with the same value, remove the one with the lowest index. If you get an empty array/list, return an empty array/list.
//Don't change the order of the elements that are left.
function removeSmallest(numbers) {
  const min = Math.min(...numbers);
  const index = numbers.indexOf(min);

  return numbers.filter((_, i) => i !== index);
}

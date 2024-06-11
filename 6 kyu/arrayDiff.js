//Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.
//It should remove all values from list a, which are present in list b keeping their order.
//If a value is present in b, all of its occurrences must be removed from the other.
function arrayDiff(a, b) {
  b.forEach((e) => {
    a.forEach((el) => {
      if (a.includes(e)) {
        let indexOfEl = a.indexOf(e);
        a.splice(indexOfEl, 1);
      }
    });
  });
  return a;
}

//Second solution
function arrayDiffSecond(a, b) {
  return a.filter((e) => !b.includes(e));
}

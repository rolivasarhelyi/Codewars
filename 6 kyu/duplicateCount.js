//Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.
function duplicateCount(text) {
  let countChars = {};
  text
    .toLowerCase()
    .split('')
    .forEach((e) => {
      if (e in countChars) {
        countChars[e] += 1;
      } else {
        countChars[e] = 1;
      }
    });
  let howManyDuplicate = 0;
  for (const [key, value] of Object.entries(countChars)) {
    if (value > 1) howManyDuplicate++;
  }
  return howMany;
}

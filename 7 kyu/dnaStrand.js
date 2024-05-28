//In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". Your function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).
function dnaStrand(dna) {
  toChange = dna.split('');
  for (let i = 0; i < toChange.length; i++) {
    if (toChange[i] === 'A') {
      toChange[i] = 'T';
    } else if (toChange[i] === 'T') {
      toChange[i] = 'A';
    } else if (toChange[i] === 'C') {
      toChange[i] = 'G';
    } else if (toChange[i] === 'G') {
      toChange[i] = 'C';
    }
  }
  return toChange.join('');
}

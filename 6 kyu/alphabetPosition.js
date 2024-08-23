function alphabetPosition(text) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  const textArr = text.split('');

  const map1 = textArr.map((element) => {
    console.log(alphabet.includes(element.toLowerCase()));
    if (alphabet.includes(element.toLowerCase())) {
      return alphabet.indexOf(element.toLowerCase()) + 1;
    } else {
      return;
    }
  });
  return map1.filter((e) => e !== undefined).join(' ');
}

console.log(alphabetPosition("The sunset sets at twelve o' clock."));

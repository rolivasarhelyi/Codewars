function areYouPlayingBanjo(name) {
  firstLetter = name.split('');
  firstLetter = firstLetter[0];
  return firstLetter.toLowerCase() === 'r'
    ? `${name} plays banjo`
    : `${name} does not play banjo`;
}

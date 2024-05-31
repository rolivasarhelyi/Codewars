//Write a function feast that takes the animal's name and dish as arguments and returns true or false to indicate whether the beast is allowed to bring the dish to the feast.
//Assume that beast and dish are always lowercase strings, and that each has at least two letters. beast and dish may contain hyphens and spaces, but these will not appear at the beginning or end of the string. They will not contain numerals.
function feast(beast, dish) {
  return (
    beast.split('')[0] === dish.split('')[0] &&
    beast.split('')[beast.length - 1] === dish.split('')[dish.length - 1]
  );
}

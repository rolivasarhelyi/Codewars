//You receive an array with your peers' test scores. Now calculate the average and compare your score!
//Return true if you're better, else false!
function betterThanAverage(classPoints, yourPoints) {
  let sum = 0;

  classPoints.forEach(function (p) {
    sum += p;
  });

  let avg = sum / classPoints.length;

  return yourPoints >= avg ? true : false;
}

//Clock shows h hours, m minutes and s seconds after midnight.
//Your task is to write a function which returns the time since midnight in milliseconds.
function past(h, m, s) {
  const hrToMs = 3_600_000;
  const mToMs = 60_000;
  const sToMs = 1_000;

  const timeInMs = h * hrToMs + m * mToMs + s * sToMs;
  return timeInMs;
}

/*
-/- -/- -/- -/- -/- -/- -/- -/- -/- -/- = 0

1/1 1/1 1/1 1/1 1/1 1/1 1/1 1/1 1/1 1/1 = 20

10 10 10 10 10 10 10 10 10 10 = 300
*/
let currentScore = 0;

const roll = (pins) => {
  return currentScore += pins;
}

const score = () => {
  return currentScore;
}

module.exports = { roll, score };
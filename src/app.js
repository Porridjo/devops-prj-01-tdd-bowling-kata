/*
-/- -/- -/- -/- -/- -/- -/- -/- -/- -/- = 0

1/1 1/1 1/1 1/1 1/1 1/1 1/1 1/1 1/1 1/1 = 20

5/5 3/- -/- -/- -/- -/- -/- -/- -/- -/- = 16

10/- 1/1 -/- -/- -/- -/- -/- -/- -/- -/- = 14

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
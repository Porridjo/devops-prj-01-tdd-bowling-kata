/*
-/- -/- -/- -/- -/- -/- -/- -/- -/- -/- = 0

1/1 1/1 1/1 1/1 1/1 1/1 1/1 1/1 1/1 1/1 = 20

5/5 3/- -/- -/- -/- -/- -/- -/- -/- -/- = 16

10/- 1/1 -/- -/- -/- -/- -/- -/- -/- -/- = 14

10/- 10/- 10/- 10/- 10/- 10/- 10/- 10/- 10/- 10/- = 300
*/

let scores = [];

const resetScores = () => {
    scores = [];
};

const roll = (pins) => {
    scores.push(pins);
};

const score = () => {
    let score = 0;
    let scoreIndex = 0;
    for (let turn = 0; turn < 10; turn++) {
        scoreOfTheTurn = scores[scoreIndex] + scores[scoreIndex + 1];
        if (scoreOfTheTurn == 10) {
            score += 10 + scores[scoreIndex + 2];
        } else {
            score += scoreOfTheTurn;
        }
        scoreIndex += 2;
    }
    return score;
};

module.exports = { roll, score, resetScores };

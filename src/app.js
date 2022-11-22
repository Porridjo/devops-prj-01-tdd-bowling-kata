let scores = [];

const roll = function (pins) {
    scores.push(pins);
};

const score = function () {
    let score = 0;
    let scoreIndex = 0;
    for (let turn = 0; turn < 10; turn++) {
        scoreOfTheTurn = scores[scoreIndex] + scores[scoreIndex + 1];
        if (isSpare(scoreOfTheTurn)) {
            score += spareBonus(scoreIndex);
        } else {
            score += scoreOfTheTurn;
        }
        scoreIndex += 2;
    }
    return score;
};

const resetScores = () => {
    scores = [];
};

const isSpare = (scoreOfTheTurn) => {
    return scoreOfTheTurn == 10;
};

const spareBonus = (scoreIndex) => {
    return 10 + scores[scoreIndex + 2];
};

module.exports = { roll, score, resetScores };

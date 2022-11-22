let currentScore = 0;

const roll = (pins) => {
    return (currentScore += pins);
};

const score = function () {
    return currentScore;
};

module.exports = { roll, score };

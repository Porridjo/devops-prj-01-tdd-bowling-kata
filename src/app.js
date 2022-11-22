let currentScore = 0;

const roll = function(pins) {
    return (currentScore += pins);
};

const score = function () {
    return currentScore;
};

module.exports = { roll, score };

const { roll, score, resetScores } = require('../app');

beforeEach(() => {
    resetScores();
});

describe('bowling kata test suite ', () => {
    it('should return 0 for a gutter game', () => {
        rollMany(0, 20);
        expect(score()).toBe(0);
    });
    it('should return 20 for a game with only 1s', () => {
        rollMany(1, 20);
        expect(score()).toBe(20);
    });
    it('should return 16 for a game with a spare followed by 3 and 17 gutter balls', () => {
        roll(5);
        roll(5);
        roll(3);
        rollMany(0, 17);

        expect(score()).toBe(16);
    });
    it('should return 14 for a game with a strike followed by 2 1s and 16 gutter balls', () => {
        roll(10);
        rollMany(1, 2);
        rollMany(0, 16);

        expect(score()).toBe(14);
    });
});

const rollMany = (pins, rolls) => {
    for (let i = 0; i < rolls; i++) {
        roll(pins);
    }
};

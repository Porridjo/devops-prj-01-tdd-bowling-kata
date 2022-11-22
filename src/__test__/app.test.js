const { roll, score } = require('../app');

describe('bowling kata test suite ', () => {
    it('should return 0 for a gutter game', () => {
        expect(score()).toBe(0);
    });
    it('should return 20 for a game with only 1s', () => {
        for (let i = 0; i < 20; i++) {
            roll(1);
        }
        expect(score()).toBe(20);
    });
});

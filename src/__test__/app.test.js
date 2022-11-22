const {score} = require('../app');

describe('Test bowling kata ', () => {
    test('should return 0 for a gutter game',() => {
        expect(score()).toBe(0);
    });
}); 
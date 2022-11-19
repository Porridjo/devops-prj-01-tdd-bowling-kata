const { roll, score } = require('../app.js');

describe('bowling kata test suite', () => {
  test('should return 0 for a gutter game', () => {
    expect(score()).toBe(0);
  })
});
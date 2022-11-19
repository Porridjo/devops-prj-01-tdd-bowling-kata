const { roll, score } = require('../app.js');

describe('bowling kata test suite', () => {
  it('should return 0 for a gutter game', () => {
    rollMany(0,20);
    expect(score()).toBe(0);
  });
  it('should return 20 for a game with only 1s', () => {
    rollMany(1,20);
    expect(score()).toBe(20);
  });
});

const rollMany = (pins, rolls) => {
  for (let i=0; i<rolls; i++) {
    roll(pins);
  }
}
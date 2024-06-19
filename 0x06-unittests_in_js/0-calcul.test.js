const calculateNumber = require('./0-calcul.js');
const assert = require('assert');

describe('calculateNumber', () => {
  it('should round a and b and return the sum of these two numbers', () => {
    assert.strictEqual(calculateNumber(1, 3), 4);
    assert.strictEqual(calculateNumber(1, 3.7), 5);
    assert.strictEqual(calculateNumber(1.2, 3.7), 5);
    assert.strictEqual(calculateNumber(1.5, 3.7), 6);
    assert.strictEqual(calculateNumber(1.4, 3.7), 5);
    assert.strictEqual(calculateNumber(0.0, 3.7), 4);
    assert.strictEqual(calculateNumber(1.4, 3.2), 4);
    assert.strictEqual(calculateNumber(1.4, 3.5), 5);
    assert.strictEqual(calculateNumber(-1.4, -3.5), -4);
    assert.strictEqual(calculateNumber(-1.4, 3.5), 3);
    assert.strictEqual(calculateNumber(1.4, -3.5), -2);
    assert.strictEqual(calculateNumber(0.1, 0.0), 0);
  });
});
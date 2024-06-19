const calculateNumber = require('./1-calcul.js');
const assert = require('assert');

describe('calculateNumber', () => {
  it('Sum', () => {
    assert.strictEqual(calculateNumber(1, 3, 'SUM'), 4);
    assert.strictEqual(calculateNumber(1, 3.7, 'SUM'), 5);
    assert.strictEqual(calculateNumber(1.2, 3.7, 'SUM'), 5);
    assert.strictEqual(calculateNumber(1.5, 3.7, 'SUM'), 6);
    assert.strictEqual(calculateNumber(1.4, 3.7, 'SUM'), 5);
    assert.strictEqual(calculateNumber(0.0, 3.7, 'SUM'), 4);
    assert.strictEqual(calculateNumber(1.4, 3.2, 'SUM'), 4);
    assert.strictEqual(calculateNumber(1.4, 3.5, 'SUM'), 5);
    assert.strictEqual(calculateNumber(-1.4, -3.5, 'SUM'), -4);
    assert.strictEqual(calculateNumber(-1.4, 3.5, 'SUM'), 3);
    assert.strictEqual(calculateNumber(1.4, -3.5, 'SUM'), -2);
    assert.strictEqual(calculateNumber(0.1, 0.0, 'SUM'), 0);
  });

  it('Subtraction', () => {
    assert.strictEqual(calculateNumber(1, 3, 'SUBTRACT'), -2);
    assert.strictEqual(calculateNumber(1, 3.7, 'SUBTRACT'), -3);
    assert.strictEqual(calculateNumber(1.2, 3.7, 'SUBTRACT'), -3);
    assert.strictEqual(calculateNumber(1.5, 3.7, 'SUBTRACT'), -2);
    assert.strictEqual(calculateNumber(1.4, 3.7, 'SUBTRACT'), -3);
    assert.strictEqual(calculateNumber(0.0, 3.7, 'SUBTRACT'), -4);
    assert.strictEqual(calculateNumber(1.4, 3.2, 'SUBTRACT'), -2);
    assert.strictEqual(calculateNumber(1.4, 3.5, 'SUBTRACT'), -3);
    assert.strictEqual(calculateNumber(-1.4, -3.5, 'SUBTRACT'), 2);
    assert.strictEqual(calculateNumber(-1.4, 3.5, 'SUBTRACT'), -5);
    assert.strictEqual(calculateNumber(1.4, -3.5, 'SUBTRACT'), 4);
  });

  it('Division', () => {
    assert.strictEqual(calculateNumber(1, 3, 'DIVIDE'), 1 / 3);
    assert.strictEqual(calculateNumber(1, 3.7, 'DIVIDE'), 1 / 4);
    assert.strictEqual(calculateNumber(1.2, 3.7, 'DIVIDE'), 1 / 4);
    assert.strictEqual(calculateNumber(1.5, 3.7, 'DIVIDE'), 2 / 4);
    assert.strictEqual(calculateNumber(1.4, 3.7, 'DIVIDE'), 1 / 4);
    assert.strictEqual(calculateNumber(0.0, 3.7, 'DIVIDE'), 0);
    assert.strictEqual(calculateNumber(1.4, 3.2, 'DIVIDE'), 1 / 3);
    assert.strictEqual(calculateNumber(1.4, 3.5, 'DIVIDE'), 1 / 4);
    assert.strictEqual(calculateNumber(-1.4, -3.5, 'DIVIDE'), -1 / -3);
    assert.strictEqual(calculateNumber(-1.4, 3.5, 'DIVIDE'), -1 / 4);
    assert.strictEqual(calculateNumber(1.4, -3.5, 'DIVIDE'), 1 / -3);
    assert.strictEqual(calculateNumber(0.1, 0.0, 'DIVIDE'), 'Error');
  });
});

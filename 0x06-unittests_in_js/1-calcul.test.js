const calculateNumber = require('./1-calcul.js');
const assert = require('assert');

describe('calculateNumber', () => {
  it('Sum', () => {
    assert.strictEqual(calculateNumber('SUM', 1, 3), 4);
    assert.strictEqual(calculateNumber('SUM', 1, 3.7), 5);
    assert.strictEqual(calculateNumber('SUM', 1.2, 3.7 ), 5);
    assert.strictEqual(calculateNumber('SUM', 1.5, 3.7 ), 6);
    assert.strictEqual(calculateNumber('SUM', 1.4, 3.7 ), 5);
    assert.strictEqual(calculateNumber('SUM', 0.0, 3.7 ), 4);
    assert.strictEqual(calculateNumber('SUM', 1.4, 3.2 ), 4);
    assert.strictEqual(calculateNumber('SUM', 1.4, 3.5 ), 5);
    assert.strictEqual(calculateNumber('SUM', -1.4, -3.5), -4);
    assert.strictEqual(calculateNumber('SUM', -1.4, 3.5), 3);
    assert.strictEqual(calculateNumber('SUM', 1.4, -3.5), -2);
    assert.strictEqual(calculateNumber('SUM', 0.1, 0.0), 0);
  });

  it('Subtraction', () => {
    // substract b from a
    assert.strictEqual(calculateNumber('SUBTRACT', 1, 3), 2);
    assert.strictEqual(calculateNumber('SUBTRACT', 1, 3.7), 3);
    assert.strictEqual(calculateNumber('SUBTRACT', 1.2, 3.7), 3);
    assert.strictEqual(calculateNumber('SUBTRACT', 1.5, 3.7), 2);
    assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 3.7), 3);
    assert.strictEqual(calculateNumber('SUBTRACT', 0.0, 3.7), 4);
    assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 3.2), 2);
    assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 3.5), 3);
    assert.strictEqual(calculateNumber('SUBTRACT', -1.4, -3.5), -2);
    assert.strictEqual(calculateNumber('SUBTRACT', -1.4, 3.5), 5);
    assert.strictEqual(calculateNumber('SUBTRACT', 1.4, -3.5), -4);
  });

  it('Division', () => {
    assert.strictEqual(calculateNumber('DIVIDE', 1, 3), 1 / 3);
    assert.strictEqual(calculateNumber('DIVIDE', 1, 3.7), 1 / 4);
    assert.strictEqual(calculateNumber('DIVIDE', 1.2, 3.7), 1 / 4);
    assert.strictEqual(calculateNumber('DIVIDE', 1.5, 3.7), 2 / 4);
    assert.strictEqual(calculateNumber('DIVIDE', 1.4, 3.7), 1 / 4);
    assert.strictEqual(calculateNumber('DIVIDE', 0.0, 3.7), 0);
    assert.strictEqual(calculateNumber('DIVIDE', 1.4, 3.2), 1 / 3);
    assert.strictEqual(calculateNumber('DIVIDE', 1.4, 3.5), 1 / 4);
    assert.strictEqual(calculateNumber('DIVIDE', -1.4, -3.5), -1 / -3);
    assert.strictEqual(calculateNumber('DIVIDE', -1.4, 3.5), -1 / 4);
    assert.strictEqual(calculateNumber('DIVIDE', 1.4, -3.5), 1 / -3);
    assert.strictEqual(calculateNumber('DIVIDE', 0.1, 0.0), 'Error');
  });

  it('Invalid type', () => {
    assert.strictEqual(calculateNumber('INVALID', 1, 3), 'Error');
  });
});

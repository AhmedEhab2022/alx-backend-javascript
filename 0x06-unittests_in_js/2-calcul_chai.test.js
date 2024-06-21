const calculateNumber = require('./2-calcul_chai');
const { expect } = require('chai')

describe('calculateNumber', () => {
  it('Sum', () => {
    expect(calculateNumber('SUM', 1, 3), 4).to.equal(4);
    expect(calculateNumber('SUM', 1, 3.7), 5).to.equal(5);
    expect(calculateNumber('SUM', 1.2, 3.7 )).to.equal(5);
    expect(calculateNumber('SUM', 1.5, 3.7 )).to.equal(6);
    expect(calculateNumber('SUM', 1.4, 3.7 )).to.equal(5);
    expect(calculateNumber('SUM', 0.0, 3.7 )).to.equal(4);
    expect(calculateNumber('SUM', 1.4, 3.2 )).to.equal(4);
    expect(calculateNumber('SUM', 1.4, 3.5 )).to.equal(5);
    expect(calculateNumber('SUM', -1.4, -3.5)).to.equal(-4);
    expect(calculateNumber('SUM', -1.4, 3.5)).to.equal(3);
    expect(calculateNumber('SUM', 1.4, -3.5)).to.equal(-2);
    expect(calculateNumber('SUM', 0.1, 0.0)).to.equal(0);
  });

  it('Subtraction', () => {
    expect(calculateNumber('SUBTRACT', 1, 3)).to.equal(-2);
    expect(calculateNumber('SUBTRACT', 1, 3.7)).to.equal(-3);
    expect(calculateNumber('SUBTRACT', 1.2, 3.7)).to.equal(-3);
    expect(calculateNumber('SUBTRACT', 1.5, 3.7)).to.equal(-2);
    expect(calculateNumber('SUBTRACT', 1.4, 3.7)).to.equal(-3);
    expect(calculateNumber('SUBTRACT', 0.0, 3.7)).to.equal(-4);
    expect(calculateNumber('SUBTRACT', 1.4, 3.2)).to.equal(-2);
    expect(calculateNumber('SUBTRACT', 1.4, 3.5)).to.equal(-3);
    expect(calculateNumber('SUBTRACT', -1.4, -3.5)).to.equal(2);
    expect(calculateNumber('SUBTRACT', -1.4, 3.5)).to.equal(-5);
    expect(calculateNumber('SUBTRACT', 1.4, -3.5)).to.equal(4);
  });

  it('Division', () => {
    expect(calculateNumber('DIVIDE', 1, 3)).to.equal(1 / 3);
    expect(calculateNumber('DIVIDE', 1, 3.7)).to.equal(1 / 4);
    expect(calculateNumber('DIVIDE', 1.2, 3.7)).to.equal(1 / 4);
    expect(calculateNumber('DIVIDE', 1.5, 3.7)).to.equal(2 / 4);
    expect(calculateNumber('DIVIDE', 1.4, 3.7)).to.equal(1 / 4);
    expect(calculateNumber('DIVIDE', 0.0, 3.7)).to.equal(0);
    expect(calculateNumber('DIVIDE', 1.4, 3.2)).to.equal(1 / 3);
    expect(calculateNumber('DIVIDE', 1.4, 3.5)).to.equal(1 / 4);
    expect(calculateNumber('DIVIDE', -1.4, -3.5)).to.equal(1 / 3);
    expect(calculateNumber('DIVIDE', -1.4, 3.5)).to.equal(-1 / 4);
    expect(calculateNumber('DIVIDE', 1.4, -3.5)).to.equal(1 / -3);
    expect(calculateNumber('DIVIDE', 0.1, 0.0)).to.equal('Error');
  });

  it('Invalid type', () => {
    expect(calculateNumber('INVALID', 1, 3)).to.equal('Error');
  });
});

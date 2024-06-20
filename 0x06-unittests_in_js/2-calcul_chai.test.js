const calculateNumber = require('./2-calcul_chai.js');
const { expect } = require('chai');

describe('calculateNumber', () => {
  it('Sum', () => {
    expect(calculateNumber(1, 3, 'SUM')).to.equal(4);
    expect(calculateNumber(1, 3.7, 'SUM')).to.equal(5);
    expect(calculateNumber(1.2, 3.7, 'SUM')).to.equal(5);
    expect(calculateNumber(1.5, 3.7, 'SUM')).to.equal(6);
    expect(calculateNumber(1.4, 3.7, 'SUM')).to.equal(5);
    expect(calculateNumber(0.0, 3.7, 'SUM')).to.equal(4);
    expect(calculateNumber(1.4, 3.2, 'SUM')).to.equal(4);
    expect(calculateNumber(1.4, 3.5, 'SUM')).to.equal(5);
    expect(calculateNumber(-1.4, -3.5, 'SUM')).to.equal(-4);
    expect(calculateNumber(-1.4, 3.5, 'SUM')).to.equal(3);
    expect(calculateNumber(1.4, -3.5, 'SUM')).to.equal(-2);
    expect(calculateNumber(0.1, 0.0, 'SUM')).to.equal(0);
  });

  it('Subtraction', () => {
    expect(calculateNumber(1, 3, 'SUBTRACT')).to.equal(-2);
    expect(calculateNumber(1, 3.7, 'SUBTRACT')).to.equal(-3);
    expect(calculateNumber(1.2, 3.7, 'SUBTRACT')).to.equal(-3);
    expect(calculateNumber(1.5, 3.7, 'SUBTRACT')).to.equal(-2);
    expect(calculateNumber(1.4, 3.7, 'SUBTRACT')).to.equal(-3);
    expect(calculateNumber(0.0, 3.7, 'SUBTRACT')).to.equal(-4);
    expect(calculateNumber(1.4, 3.2, 'SUBTRACT')).to.equal(-2);
    expect(calculateNumber(1.4, 3.5, 'SUBTRACT')).to.equal(-3);
    expect(calculateNumber(-1.4, -3.5, 'SUBTRACT')).to.equal(2);
    expect(calculateNumber(-1.4, 3.5, 'SUBTRACT')).to.equal(-5);
    expect(calculateNumber(1.4, -3.5, 'SUBTRACT')).to.equal(4);
  });

  it('Division', () => {
    expect(calculateNumber(1, 3, 'DIVIDE')).to.equal(1 / 3);
    expect(calculateNumber(1, 3.7, 'DIVIDE')).to.equal(1 / 4);
    expect(calculateNumber(1.2, 3.7, 'DIVIDE')).to.equal(1 / 4);
    expect(calculateNumber(1.5, 3.7, 'DIVIDE')).to.equal(2 / 4);
    expect(calculateNumber(1.4, 3.7, 'DIVIDE')).to.equal(1 / 4);
    expect(calculateNumber(0.0, 3.7, 'DIVIDE')).to.equal(0);
    expect(calculateNumber(1.4, 3.2, 'DIVIDE')).to.equal(1 / 3);
    expect(calculateNumber(1.4, 3.5, 'DIVIDE')).to.equal(1 / 4);
    expect(calculateNumber(-1.4, -3.5, 'DIVIDE')).to.equal(-1 / -3);
    expect(calculateNumber(-1.4, 3.5, 'DIVIDE')).to.equal(-1 / 4);
    expect(calculateNumber(1.4, -3.5, 'DIVIDE')).to.equal(1 / -3);
    expect(calculateNumber(0.1, 0.0, 'DIVIDE')).to.equal('Error');
  });

  it('Invalid type', () => {
    expect(calculateNumber(1, 3, 'INVALID')).to.equal('Error');
  });
});

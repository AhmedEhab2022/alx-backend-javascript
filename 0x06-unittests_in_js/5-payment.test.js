const sinon = require('sinon');
const Utils = require('./utils');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./5-payment');

describe('sendPaymentRequestToApi', () => {
  let consoleSpy;
  let calculateNumberSpy;

  beforeEach(() => {
    consoleSpy = sinon.spy(console, 'log');
    calculateNumberSpy = sinon.spy(Utils.prototype, 'calculateNumber');
  });

  afterEach(() => {
    sinon.restore();
  });

  it('should log the total 1', () => {
    sendPaymentRequestToApi(100, 20);
    expect(consoleSpy.calledOnceWithExactly('The total is: 120')).to.be.true;
    expect(calculateNumberSpy.calledOnceWithExactly('SUM', 100, 20)).to.be.true;
    
  });

  it('should log the total 2', () => {
    sendPaymentRequestToApi(10, 10);
    expect(consoleSpy.calledOnceWithExactly('The total is: 20')).to.be.true;
    expect(calculateNumberSpy.calledOnceWithExactly('SUM', 10, 10)).to.be.true;
  });
});
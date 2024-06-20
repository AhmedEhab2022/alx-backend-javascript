const sinon = require('sinon');
const Utils = require('./utils');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', () => {
  it('should log the total', () => {
    const consoleSpy = sinon.spy(console, 'log');
    const calculateNumberSpy = sinon.spy(Utils.prototype, 'calculateNumber');
    sendPaymentRequestToApi(100, 20);
    expect(consoleSpy.calledOnceWithExactly('The total is: 120')).to.be.true;
    expect(calculateNumberSpy.calledOnceWithExactly(100, 20, 'SUM')).to.be.true;
    consoleSpy.restore();
    calculateNumberSpy.restore();
  });
});

const sinon = require('sinon');
const Utils = require('./utils');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./4-payment');

describe('sendPaymentRequestToApi', () => {
  it('should log the total', () => {
    const consoleSpy = sinon.spy(console, 'log');
    const calculateNumberStub = sinon.stub(Utils, 'calculateNumber').returns(10);
    sendPaymentRequestToApi(100, 20);
    expect(consoleSpy.calledOnceWithExactly('The total is: 10')).to.be.true;
    expect(calculateNumberStub.calledOnceWithExactly('SUM', 100, 20)).to.be.true;
    consoleSpy.restore();
    calculateNumberStub.restore();
  });
});

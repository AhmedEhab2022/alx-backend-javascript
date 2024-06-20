const sinon = require('sinon');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', () => {
  it('should log the total', () => {
    const consoleSpy = sinon.spy(console, 'log');
    const calculateNumberStub = sinon.stub(Utils.prototype, 'calculateNumber').returns(10);
    sendPaymentRequestToApi(100, 20);
    expect(consoleSpy.calledOnceWithExactly('The total is: 10')).to.be.true;
    expect(calculateNumberStub.calledOnceWithExactly(100, 20, 'SUM')).to.be.true;
    consoleSpy.restore();
    calculateNumberStub.restore();
  });
});

const sinon = require('sinon');
const Utils = require('./utils');

descripe('sendPaymentRequestToApi', () => {
  let consoleSpy;
  let calculateNumberSpy;

  beforeEach(() => {
    consoleSpy = sinon.spy(console, 'log');
    calculateNumberSpy = sinon.spy(Utils, 'calculateNumber');
  });

  afterEach(() => {
    sinon.restore();
  });

  it('should log the total 1', () => {
    sendPaymentRequestToApi(100, 20);
    expect(consoleSpy.calledOnceWithExactly('The total is: 120')).to.be.true;
    expect(calculateNumberSpy.calledOnceWithExactly(100, 20, 'SUM')).to.be.true;
    
  });

  it('should log the total 2', () => {
    sendPaymentRequestToApi(10, 10);
    expect(consoleSpy.calledOnceWithExactly('The total is: 10')).to.be.true;
    expect(calculateNumberSpy.calledOnceWithExactly(10, 10, 'SUM')).to.be.true;
  });
});
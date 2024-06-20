const getPaymentTokenFromAPI = require('./6-payment_token');
const { expect } = require('chai');

describe('getPaymentTokenFromAPI', () => {
  it('should return the correct value', (done) => {
    getPaymentTokenFromAPI(true)
      .then((response) => {
        expect(response).to.eql({ data: 'Successful response from the API' });
        done();
      })
      .catch((error) => done(error));
  });

  it('should return the correct value', () => {
    expect(getPaymentTokenFromAPI(false)).to.be.undefined;
  });
});

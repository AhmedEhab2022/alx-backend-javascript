const getPaymentTokenFromAPI = require('./6-payment_token');

descripe('getPaymentTokenFromAPI', () => {
  it('should return the correct value', (done) => {
    getPaymentTokenFromAPI(true)
      .then((response) => {
        expect(response).to.eql({ data: 'Successful response from the API' });
        done();
      })
      .catch((error) => done(error));
  });

  it('should return the correct value', (done) => {
    getPaymentTokenFromAPI(false)
      .then((response) => {
        expect(response).to.eql(undefined);
        done();
      })
      .catch((error) => done(error));
  });
});

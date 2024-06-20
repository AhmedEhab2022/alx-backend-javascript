const request = require('request');
const chai = require('chai');
const { expect } = chai;

describe('Index page', () => {
  const baseUrl = 'http://localhost:7865';

  it('Correct status code?', (done) => {
    request.get(baseUrl, (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('Correct result?', (done) => {
    request.get(baseUrl, (error, response, body) => {
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });
});

describe('Cart page', () => {
  const pattern = /^Payment methods for cart \d+$/;
  const baseUrl = 'http://localhost:7865/cart/12';

  it('Correct status code?', (done) => {
    request.get(baseUrl, (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('Correct result?', (done) => {
    request.get(baseUrl, (error, response, body) => {
      expect(body).to.match(pattern);
      done();
    });
  });

  it('Invalid cart ID', (done) => {
    request.get('http://localhost:7865/cart/hello', (error, response, body) => {
      expect(response.statusCode).to.equal(404);
      done();
    });
  });
});

describe('Available payment methods', () => {
  const baseUrl = 'http://localhost:7865/available_payments';

  it('Correct status code?', (done) => {
    request.get(baseUrl, (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('Correct result?', (done) => {
    request.get(baseUrl, (error, response, body) => {
      const bodyObj = JSON.parse(body);
      expect(bodyObj).to.eql({ payment_methods: { credit_cards: true, paypal: false } });
      done();
    });
  });
});

describe('Login page', () => {
  const baseUrl = 'http://localhost:7865/login';
  const options = {body: { userName: 'Betty' }, json: true};

  it('Correct status code?', (done) => {
    request.post(baseUrl, options, (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('Correct result?', (done) => {
    request.post(baseUrl, options, (error, response, body) => {
      expect(body).to.equal('Welcome Betty');
      done();
    });
  });

  it('No user name', (done) => {
    request.post(baseUrl, (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      expect(body).to.equal('Welcome undefined');
      done();
    });
  });

});

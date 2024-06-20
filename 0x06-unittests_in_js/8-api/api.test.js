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
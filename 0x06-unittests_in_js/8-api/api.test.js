const request = require('request');

descripe('GET /', () => {
  it('should return a 200 status code', () => {
    return request(app)
      .get('/')
      .expect(200)
  });

  it('should return a message', () => {
    return request(app)
      .get('/')
      .then(response => {
        expect(response.body.message).toBe('Welcome to the payment system');
      });
  });
});
const request = require('request');
const { expect } = require('chai');

describe('Index page', function () {
  const baseUrl = 'http://localhost:7865';

  it('should return correct message for GET /', function (done) {
    request(`${baseUrl}/`, function (error, response, body) {
      expect(response.statusCode).to.equal(200);
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });
});

describe('Cart page', function () {
  const baseUrl = 'http://localhost:7865/cart';

  it('should return correct message for valid cart id', function (done) {
    request(`${baseUrl}/12`, function (error, response, body) {
      expect(response.statusCode).to.equal(200);
      expect(body).to.equal('Payment methods for cart 12');
      done();
    });
  });

  it('should return 404 for invalid cart id', function (done) {
    request(`${baseUrl}/hello`, function (error, response, body) {
      expect(response.statusCode).to.equal(404);
      done();
    });
  });
});

describe('Available Payments endpoint', function () {
  const baseUrl = 'http://localhost:7865';

  it('should return correct payment methods', function (done) {
    request(`${baseUrl}/available_payments`, function (error, response, body) {
      expect(response.statusCode).to.equal(200);
      expect(JSON.parse(body)).to.deep.equal({
        payment_methods: {
          credit_cards: true,
          paypal: false
        }
      });
      done();
    });
  });
});

describe('Login endpoint', function () {
  const baseUrl = 'http://localhost:7865';

  it('should return correct welcome message for POST /login', function (done) {
    request.post({
      url: `${baseUrl}/login`,
      json: { userName: 'Betty' }
    }, function (error, response, body) {
      expect(response.statusCode).to.equal(200);
      expect(body).to.equal('Welcome Betty');
      done();
    });
  });

  it('should return 400 for POST /login without userName', function (done) {
    request.post({
      url: `${baseUrl}/login`,
      json: {}
    }, function (error, response, body) {
      expect(response.statusCode).to.equal(400);
      expect(body).to.equal('Bad Request');
      done();
    });
  });
});

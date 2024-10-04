const request = require('request');
const { expect } = require('chai');
const { app, server } = require('./api');

describe('Index page', function () {
    const url = 'http://localhost:7865/';

    it('GET / returns "Welcome to the payment system"', function (done) {
        request(url, function (error, response, body) {
            expect(response.statusCode).to.equal(200);
            expect(body).to.equal('Welcome to the payment system');
            done();
        });
    });
});

describe('Cart page', function () {
    const baseUrl = 'http://localhost:7865/cart/';

    it('GET /cart/:id returns correct message', function (done) {
        request(baseUrl + '12', function (error, response, body) {
            expect(response.statusCode).to.equal(200);
            expect(body).to.equal('Payment methods for cart 12');
            done();
        });
    });

    it('GET /cart/:id returns 404 for non-numeric id', function (done) {
        request(baseUrl + 'abc', function (error, response, body) {
            expect(response.statusCode).to.equal(404);
            expect(body).to.equal('Not Found');
            done();
        });
    });
});

describe('Available payments', function () {
    const url = 'http://localhost:7865/available_payments';

    it('GET /available_payments returns correct payment methods', function (done) {
        request(url, function (error, response, body) {
            const jsonBody = JSON.parse(body);
            expect(response.statusCode).to.equal(200);
            expect(jsonBody).to.deep.equal({
                payment_methods: {
                    credit_cards: true,
                    paypal: false
                }
            });
            done();
        });
    });
});

describe('Login', function () {
    const url = 'http://localhost:7865/login';

    it('POST /login returns correct welcome message', function (done) {
        request.post({
            url: url,
            json: { userName: 'Betty' },
            headers: { 'Content-Type': 'application/json' }
        }, function (error, response, body) {
            expect(response.statusCode).to.equal(200);
            expect(body).to.equal('Welcome Betty');
            done();
        });
    });

    it('POST /login returns correct welcome message for other users', function (done) {
        request.post({
            url: url,
            json: { userName: 'Alice' },
            headers: { 'Content-Type': 'application/json' }
        }, function (error, response, body) {
            expect(response.statusCode).to.equal(200);
            expect(body).to.equal('Welcome Alice');
            done();
        });
    });
});

after(function (done) {
    server.close(done);
});

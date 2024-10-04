const request = require('request');
const { expect } = require('chai');
const app = require('./api');
const http = require('http');

describe('API tests', function () {
    let server;

    before(function (done) {
        server = http.createServer(app);
        server.listen(7865, done);
    });

    after(function (done) {
        server.close(done);
    });

    describe('Index page', function () {
        const url = 'http://localhost:7865/';

        it('should return correct welcome message', function (done) {
            request(url, function (error, response, body) {
                expect(response.statusCode).to.equal(200);
                expect(body).to.equal('Welcome to the payment system');
                done();
            });
        });
    });

    describe('Available payments', function () {
        const url = 'http://localhost:7865/available_payments';

        it('should return correct payment methods', function (done) {
            request(url, function (error, response, body) {
                const jsonBody = JSON.parse(body);
                expect(response.statusCode).to.equal(200);
                expect(jsonBody.payment_methods.credit_cards).to.equal(true);
                expect(jsonBody.payment_methods.paypal).to.equal(false);
                done();
            });
        });
    });

    describe('Login', function () {
        const url = 'http://localhost:7865/login';

        it('should return correct welcome message', function (done) {
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
    });
});

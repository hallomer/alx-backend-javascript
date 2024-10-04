const request = require('request');
const { expect } = require('chai');

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

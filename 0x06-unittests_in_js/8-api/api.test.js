const request = require('request');
const { expect } = require('chai');

describe('Index page', function () {
    const url = 'http://localhost:7865/';

    it('should return the correct message', function (done) {
        request(url, function (error, response, body) {
            expect(response.statusCode).to.equal(200);
            expect(body).to.equal('Welcome to the payment system');
            done();
        });
    });
});

const request = require('request');
const { expect } = require('chai');

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

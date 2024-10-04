const getPaymentTokenFromAPI = require('./6-payment_token');
const { expect } = require('chai');

describe('getPaymentTokenFromAPI', function () {
    it('should return a resolved promise with the correct response when success is true', function (done) {
        getPaymentTokenFromAPI(true)
            .then((response) => {
                expect(response).to.include({ data: 'Successful response from the API' });
                done();
            })
            .catch((err) => done(err));
    });
});

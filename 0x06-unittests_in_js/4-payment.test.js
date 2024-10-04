const sendPaymentRequestToApi = require('./4-payment');
const Utils = require('./utils');
const sinon = require('sinon');
const { expect } = require('chai');

describe('sendPaymentRequestToApi', function() {
    let stub;
    let spy;

    beforeEach(function() {
        stub = sinon.stub(Utils, 'calculateNumber').returns(10);
        spy = sinon.spy(console, 'log');
    });

    afterEach(function() {
        stub.restore();
        spy.restore();
    });

    it('should call calculateNumber with SUM, 100, and 20', function() {
        sendPaymentRequestToApi(100, 20);

        expect(stub.calledOnceWithExactly('SUM', 100, 20)).to.be.true;
        expect(spy.calledOnceWithExactly('The total is: 10')).to.be.true;
    });
});

const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', function () {
  it('should return 6 when 1.4 and 4.5 are passed', function () {
    assert.strictEqual(calculateNumber(1.4, 4.5), 6); 
  });

  it('should return 5 when 1.2 and 3.7 are passed', function () {
    assert.strictEqual(calculateNumber(1.2, 3.7), 5);
  });

  it('should return 0 when 0.1 and 0.2 are passed', function () {
    assert.strictEqual(calculateNumber(0.1, 0.2), 0);
  });
});

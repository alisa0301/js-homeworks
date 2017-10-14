import parseAmount from '../src/parse-amount'

describe('parse-amount', function() {
  it('should parse integer string', function() {
    expect(parseAmount('100')).toBe(10000);
  });
  it('should parse string with point', function() {
    expect(parseAmount('10.11')).toBe(1011);
  });
  it('should parse integer with comma', function() {
    expect(parseAmount('10,11')).toBe(1011);
  });
});

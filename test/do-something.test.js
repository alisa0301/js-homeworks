import doThisEx from '../src/do-something'

describe('do something', function() {
  it('should parse En symbols', function() {
    expect(doThisEx('decere')).toBe('()()()');
  });
  it('should ignoring case', function() {
    expect(doThisEx('Success')).toBe(')())())');
  });
  it('should parse symbols', function() {
    expect(doThisEx('(( @')).toBe('))((');
  });
});

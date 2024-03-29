const assert = require('assert');
const factorials = require('./factorials.js');

// tests for getFactorial()

it('getFactorial(0) should correctly calculate 0!', () => {
  assert.equal(factorials.getFactorial(0), 1);
});

it('getFactorial(3) should correctly calculate 3!', () => {
  assert.equal(factorials.getFactorial(3), 6);
});

it('getFactorial("4") should correctly calculate 3!', () => {
  assert.equal(factorials.getFactorial("4"), 24);
});

it('getFactorial(-1) should detect invalid number input', () => {
  assert.equal(factorials.getFactorial(-1), -1);
});

it('getFactorial(2.3) should detect invalid real number', () => {
  assert.equal(factorials.getFactorial(2.3), -1);
});

it('getFactorial("six") should detect invalid string input', () => {
  assert.equal(factorials.getFactorial("six"), -1);
});

it('getFactorial("foo") should detect invalid string input', () => {
  assert.equal(factorials.getFactorial("foo"), -1);
});

// tests for partial permutations

it('should correctly calculate getPartialPerm(0, 0)', () => {
  assert.equal(factorials.getPartialPerm(0, 0), 1);
 ;});

it('should correctly calculate getPartialPerm(0, 1)', () => {
  assert.equal(factorials.getPartialPerm(0, 1), 1);
});

it('should correctly calculate getPartialPerm(1, 0)', () => {
  assert.equal(factorials.getPartialPerm(1, 0), 1);
});

it('should correctly calculate getPartialPerm(4, 6)', () => {
  assert.equal(factorials.getPartialPerm(4, 6), 24);
});

it('should correctly calculate getPartialPerm(6, 4)', () => {
  assert.equal(factorials.getPartialPerm(6, 4), 360);
});

it('getPartialPerm(-2, 4) should detect invalid negative number', () => {
  assert.equal(factorials.getPartialPerm(-2, 4), -1);
});

it('getPartialPerm(2, -4) should detect invalid negative number', () => {
  assert.equal(factorials.getPartialPerm(2, -4), -1);
});

it('getPartialPerm(2, 3.3) should detect invalid real number', () => {
  assert.equal(factorials.getPartialPerm(2, 2.3), -1);
});

it('getPartialPerm(.5, 3) should detect invalid real number', () => {
  assert.equal(factorials.getPartialPerm(.5, 3), -1);
});

it('getPartialPerm("six", 8) should detect invalid string input', () => {
  assert.equal(factorials.getPartialPerm("six", 8), -1);
});

it('getPartialPerm(5, "six") should detect invalid string input', () => {
  assert.equal(factorials.getPartialPerm(5, "foo"), -1);
});

it('getPartialPerm("foo") should detect invalid string input', () => {
  assert.equal(factorials.getPartialPerm("foo"), -1);
});

// tests for combinations

it('should correctly calculate combination(0, 0)', () => {
  assert.equal(factorials.combination(0, 0), 1);
 ;});

it('should correctly calculate combination(0, 1)', () => {
  assert.equal(factorials.combination(0, 1), -1);
});

it('should correctly calculate getPartialPerm(1, 0)', () => {
  assert.equal(factorials.getPartialPerm(1, 0), 1);
});

it('should correctly calculate combination(6, 4)', () => {
  assert.equal(factorials.combination(6, 4), 15);
 ;});

it('should correctly calculate combination(4, 6)', () => {
  assert.equal(factorials.combination(4, 6), -1);
 ;});

it('should correctly calculate combination(5, 5)', () => {
  assert.equal(factorials.combination(5, 5), 1);
 ;});

it('should correctly calculate combination(4, 2.5)', () => {
  assert.equal(factorials.combination(4, 2.5), -1);
 ;});

it('should correctly calculate combination(4.2, 2)', () => {
  assert.equal(factorials.combination(4.2, 2), -1);
 ;});

it('should correctly calculate combination("foo", 2)', () => {
  assert.equal(factorials.combination("foo", 2), -1);
 ;});

it('should correctly calculate combination(5, "bar")', () => {
  assert.equal(factorials.combination(5, "bar"), -1);
 ;});

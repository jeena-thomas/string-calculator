import {add} from '../src/stringCalculator';

test("returns '0' when input is an empty string", () => {
  expect(add('')).toBe(0);
}); 

test("returns a number when input is a single number", () => {
  expect(add('1')).toBe(1);
});

test("should return sum of two comma-seperated numbers", () => {
    expect(add('1,2')).toBe(3);
});
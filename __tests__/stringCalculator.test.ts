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

test("should return sum of multiple comma-separated numbers", () => {
    expect(add('1,2,3,4')).toBe(10);
});

test("should handle new lines between numbers", () => {
    expect(add('1\n2,3')).toBe(6);
    expect(add('1\n2\n3')).toBe(6);
});

test("should supports custom delimiters", () => {
    expect(add("//;\n1;2")).toBe(3);
    expect(add("//[***]\n1***2***3")).toBe(6);
});

test("should throw an error for negative numbers", () => {
  expect(() => add("-1,2")).toThrow("Negative numbers not allowed: -1");
  expect(() => add("//;\n-6;5")).toThrow("Negative numbers not allowed: -6");
  expect(() => add("2,-4,3,-5")).toThrow("Negative numbers not allowed: -4,-5");
});
import { add } from "../src/stringCalculator";

describe("String Calculator", () => {
  test("returns '0' when input is an empty string", () => {
    expect(add("")).toBe(0);
  });

  test("returns a number when input is a single number", () => {
    expect(add("1")).toBe(1);
  });

  test("should return sum of two comma-seperated numbers", () => {
    expect(add("1,2")).toBe(3);
  });

  test("should return sum of multiple comma-separated numbers", () => {
    expect(add("1,2,3,4")).toBe(10);
  });

  test("should handle new lines between numbers", () => {
    expect(add("1\n2,3")).toBe(6);
    expect(add("1\n2\n3")).toBe(6);
  });

   describe("Custom delimiters", () => {
    test("should supports single-character custom delimiter", () => {
      expect(add("//;\n1;2")).toBe(3);
    });

    test("should supports multi-character custom delimiter", () => {
      expect(add("//[***]\n1***2***3")).toBe(6);
    });

    test("should supports multiple single-character delimiters", () => {
      expect(add("//[*][%]\n1*2%3")).toBe(6);
    });

    test("should supports multiple multi-character delimiters", () => {
      expect(add("//[**][%%]\n1**2%%3")).toBe(6);
    });
  });

   describe("Negative number handling", () => {
    test("should throws an error for a single negative number", () => {
      expect(() => add("-1,2")).toThrow("Negative numbers not allowed: -1");
    });

    test("should throws an error for a negative number with custom delimiter", () => {
      expect(() => add("//;\n-6;5")).toThrow("Negative numbers not allowed: -6");
    });

    test("should throws an error listing all negative numbers", () => {
      expect(() => add("2,-4,3,-5")).toThrow("Negative numbers not allowed: -4,-5");
    });
  }); 

  test("should ignore numbers greater than 1000", () => {
    expect(add("2,1001")).toBe(2);
    expect(add("1000,1")).toBe(1001);
    expect(add("//[***]\n1001***2***3")).toBe(5);
  });
});

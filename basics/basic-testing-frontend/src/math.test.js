import { it, expect, describe } from "vitest";
import { add } from "./math";

describe("add()", () => {
  it("should summarize all number values in an array", () => {
    // Arrange
    const numbers = [1, 2, 3];
    const expectedResult = numbers.reduce((acc, prev) => prev + acc, 0);
    // Act
    const result = add(numbers);
    // Assert
    expect(result).toBe(expectedResult);
  });

  it("should yield NaN if at least one invalid number is provided", () => {
    const wrongInput = ["somestring", 2, 3];
    const result = add(wrongInput);
    expect(result).toBeNaN();
  });

  it("should yield a sum if the provided numbers are strings", () => {
    const stringInput = ["1", "2"];
    const result = add(stringInput);
    const expectedResult = stringInput.reduce((acc, prev) => +prev + +acc, 0);
    expect(result).toBe(expectedResult);
  });

  it("should yield 0 if an empty array is provided", () => {
    const numbers = [];
    const result = add(numbers);
    expect(result).toBe(0);
  });

  it("should throw an error if no value is passed into the function", () => {
    const resultFn = () => {
      add();
    };
    expect(resultFn).toThrow();
  });

  it("should throw an error if multiple arguments are passed", () => {
    const num1 = 1;
    const num2 = 2;

    const resultFn = () => {
      add(num1, num2);
    };
    expect(resultFn).toThrow(/is not iterable/);
  });
});

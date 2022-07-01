import { describe, expect, it } from "vitest";
import { validateNotEmpty } from "./validation";

describe("validationNotEmpty", () => {
  it("should throw an error if an empty string is provided as value", () => {
    const testInput = "";
    const validationFn = () => validateNotEmpty(testInput);
    expect(validationFn).toThrow();
  });

  it("should throw an error if a blank string is provided as value", () => {
    const testInput = "   ";
    const validationFn = () => validateNotEmpty(testInput);
    expect(validationFn).toThrow();
  });
  it("should throw an error with the error message provided", () => {
    const testInput = "";
    const testErrorMessage = "test";

    const validationFn = () => validateNotEmpty(testInput, testErrorMessage);
    // toThrow accepts a message or a regExp
    // to check for parts of the message
    expect(validationFn).toThrow(testErrorMessage);
  });
});

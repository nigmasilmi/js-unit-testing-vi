import { it, describe, expect } from "vitest";
import { generateToken, generateTokenPromise } from "./async-example";

describe("generateToken()", () => {
  it("should generate a token value---this is a false positive ", () => {
    // to ilustrate the incorrect testing of async code with callbacks
    const testEmail = "test@test.com";
    generateToken(testEmail, (error, token) => {
      expect(token).toBe(2); // this passes
      expect(token).toBeDefined(); // this passes
    });
  });

  it("should throw if generateToken fails", (done) => {
    // to ilustrate the incorrect testing of async code with callbacks
    const testEmail = "test@test.com";
    generateToken(testEmail, (error, token) => {
      try {
        // expect(token).toBe(2);
        expect(token).not.toBe(2);
        done();
      } catch (err) {
        done(err);
      }
    });
  });

  it("should generate a token value", (done) => {
    console.log(generateToken("hola@hola.com"));

    // to ilustrate the incorrect testing of async code with callbacks
    const testEmail = "test@test.com";
    generateToken(testEmail, (error, token) => {
      try {
        expect(token).toBeDefined();
        done();
      } catch (err) {
        done(err);
      }
    });
  });
});

describe("generateTokenPromise()", () => {
  // approach 1
  it("should generate a token value", () => {
    const testEmail = "test@test.com";
    return expect(generateTokenPromise(testEmail)).resolves.toBeDefined();
  });

  // approach 2
  it("should generate a token value", async () => {
    const testEmail = "test@test.com";
    const token = await generateTokenPromise(testEmail);
    expect(token).toBeDefined();
  });
});

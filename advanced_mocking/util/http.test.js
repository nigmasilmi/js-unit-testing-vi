import { it, vi, expect } from "vitest";

import { sendDataRequest } from "./http";
const testResponseData = { testKey: "someData" };

// specific implementation for our fetch mocked function
// why a stub function? because we need the specific methods that comes with them
// number of times called, with which arguments and whatever we need to test
const testFetch = vi.fn((url, options) => {
  return new Promise((resolve, reject) => {
    // because the fetch response looks like this
    // and we are using response.ok in our implementation

    // to test if the provided data in the body is a JSON
    if (typeof options.body !== "string") {
      return reject("not a string");
    }
    const testResponse = {
      ok: true,
      // because this method returns a promise
      json: () => {
        return new Promise((resolve, reject) => {
          resolve(testResponseData);
        });
      },
    };
    resolve(testResponse);
  });
});

// all tests will use this mock because its global
vi.stubGlobal("fetch", testFetch);

it("should return any available response data", () => {
  const testData = { key: "test" };
  return expect(sendDataRequest(testData)).resolves.toEqual(testResponseData);
});

it("should convert the provided data to JSON before sending the request", async () => {
  const testData = { key: "test" };
  // this test expects a rejection
  //expect(sendDataRequest(testData)).not.rejects.toBe("not a string");
  // a better way to test it is:
  let errorMessage;
  try {
    await sendDataRequest(testData);
  } catch (err) {
    errorMessage = err;
  }
  expect(errorMessage).not.toBe("not a string");
});

import { it, expect, vi } from "vitest";
import { promises as fs } from "fs";
import writeData from "./io";

vi.mock("fs");
vi.mock("path", () => {
  return {
    default: {
      join: (...args) => {
        return args[args.length - 1];
      },
    },
  };
});

it("should execute the write file method", () => {
  const testData = "test";
  const testFilename = "test.txt";
  writeData(testData, testFilename);
  //   return to wait that the test runner waits for it to finish
  return expect(writeData(testData, testFilename)).resolves.toBeUndefined();
  //   expect(fs.writeFile).toBeCalled();
  //expect(fs.writeFile).toBeCalledWith(testFilename, testData);
});

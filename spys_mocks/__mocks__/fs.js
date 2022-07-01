import { vi } from "vitest";

// promises is the specific submodule that we are using in our test
export const promises = {
  // specifically we are interested in the writeFile method
  // why? because we are using it in the original implementation
  // and we are testing that the result of that call returns a resolved to unknown promise

  // aka=> return fs.writeFile(storagePath, data); to this=>  .resolves.toBeUndefined();
  writeFile: vi.fn((path, data) => {
    return new Promise((resolve, reject) => {
      resolve();
    });
  }),
};

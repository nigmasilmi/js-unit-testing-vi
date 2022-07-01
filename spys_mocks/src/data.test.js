import { describe, it, expect, vi } from "vitest";
import { generateReportData } from "./data";

describe("generateReportData()", () => {
  it("should execute logFn if provided", () => {
    const logger = vi.fn();
    generateReportData(logger);
    // expect(logger).toBeCalled(); also can be used in this case
    //
    expect(logger).toHaveBeenCalled();
    // expect(logger).toHaveBeenCalledTimes(1);
    // expect(logger).toHaveBeenNthCalledWith('some argument')
  });
});

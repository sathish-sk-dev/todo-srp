import { isLimitExceed } from "../InputUtils";

describe("isLimitExceed", () => {
  it("should return false for undefined or null value", () => {
    expect(isLimitExceed(undefined, 10)).toBe(false);
    expect(isLimitExceed(null, 10)).toBe(false);
  });

  it("should return true if value length exceeds the limit", () => {
    expect(isLimitExceed("abc", 2)).toBe(true);
    expect(isLimitExceed("abcdef", 4)).toBe(true);
  });

  it("should return false if value length does not exceed the limit", () => {
    expect(isLimitExceed("abc", 5)).toBe(false);
    expect(isLimitExceed("abcdef", 10)).toBe(false);
  });
});

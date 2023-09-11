import {
  generateRandomPart,
  generateTimeStamp,
  generateUniqueId,
  isEmpty,
} from "../Utils";

describe("Utils", () => {
  describe("generateTimeStamp", () => {
    it("should generate a timestamp in base 36", () => {
      const timestamp = generateTimeStamp();
      const regex = /^[0-9a-z]+$/;
      expect(regex.test(timestamp)).toBe(true);
    });
  });

  describe("generateRandomPart", () => {
    it("should generate a random part in base 36", () => {
      const randomPart = generateRandomPart();
      const regex = /^[0-9a-z]{5}$/;
      expect(regex.test(randomPart)).toBe(true);
    });
  });

  describe("generateUniqueId", () => {
    it("should generate a unique numeric ID", () => {
      const uniqueId = generateUniqueId();
      const regex = /^[0-9a-z]+-[0-9a-z]{5}$/;
      expect(regex.test(uniqueId)).toBe(true);
    });
  });

  describe("isEmpty", () => {
    it("should return true for empty values", () => {
      expect(isEmpty(null)).toBe(true);
      expect(isEmpty(undefined)).toBe(true);
      expect(isEmpty("")).toBe(true);
      expect(isEmpty([])).toBe(true);
      expect(isEmpty(new Set())).toBe(true);
      expect(isEmpty(new Map())).toBe(true);
      expect(isEmpty({})).toBe(true);
    });

    it("should return false for non-empty values", () => {
      expect(isEmpty("hello")).toBe(false);
      expect(isEmpty([1, 2, 3])).toBe(false);
      expect(isEmpty(new Set([1, 2, 3]))).toBe(false);
      expect(isEmpty(new Map([["key", "value"]]))).toBe(false);
      expect(isEmpty({ key: "value" })).toBe(false);
    });

    it("should return false for non-empty numeric values", () => {
      expect(isEmpty(0)).toBe(false);
      expect(isEmpty(42)).toBe(false);
      expect(isEmpty(-10)).toBe(false);
    });

    it("should return false for non-empty boolean values", () => {
      expect(isEmpty(true)).toBe(false);
      expect(isEmpty(false)).toBe(false);
    });

    it("should return false for non-empty object values", () => {
      expect(isEmpty({ prop: "value" })).toBe(false);
      expect(isEmpty({})).toBe(true);
    });
  });
});

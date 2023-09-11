import { IsEmptyValueType } from "./types/IsEmptyValueType";

const generateTimeStamp = (): string => {
  return Date.now().toString(36);
};

const generateRandomPart = (): string => {
  return Math.random().toString(36).substr(2, 5);
};

const generateUniqueId = (): string => {
  return `${generateTimeStamp()}-${generateRandomPart()}`;
};

const isEmpty = (value: IsEmptyValueType): boolean => {
  if (value === null || value === undefined) {
    return true;
  }

  if (typeof value === "string") {
    return value.trim().length === 0;
  }

  if (Array.isArray(value)) {
    return value.length === 0;
  }

  if (value instanceof Map || value instanceof Set) {
    return value.size === 0;
  }

  if (typeof value === "object") {
    return Object.keys(value).length === 0;
  }

  return false;
};

export { generateTimeStamp, generateRandomPart, generateUniqueId, isEmpty };

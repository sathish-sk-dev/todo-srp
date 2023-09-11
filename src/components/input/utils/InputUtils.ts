import { isEmpty } from "../../../utils/Utils";

const isLimitExceed = (
  value: string | undefined | null,
  limit: number,
): boolean => {
  if (isEmpty(value)) {
    return false;
  }
  // @ts-ignore
  return value?.length > limit;
};

export { isLimitExceed };

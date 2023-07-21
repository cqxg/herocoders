import { data } from "../mocks";
import { ErrorsType } from "../types";
import { COUNTER_UNIT, COUNT_INITIAL_VAL, ERRORS_LIMIT } from "../constants";

export const errorsCounter = (targetWord: string): void => {
  let found = false;

  data.errors.forEach((item: ErrorsType): void => {
    if (item.word === targetWord && item.errors <= ERRORS_LIMIT) {
      item.errors += COUNTER_UNIT;
      found = true;
    }
  });

  if (!found) {
    data.errors.push({ word: targetWord, errors: COUNTER_UNIT });
  }
};

export const hasReachedErrorLimit = (
  word: string,
  errors: ErrorsType[],
  errorLimit: number
): boolean => {
  const wordEntry = errors.find(
    (entry: ErrorsType): boolean => entry.word === word
  );
  return wordEntry?.errors === errorLimit;
};

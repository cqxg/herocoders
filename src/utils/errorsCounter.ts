import { data } from "../mocks";
import { ErrorsType } from "../types";
import { COUNTER_UNIT, COUNT_INITIAL_VAL } from "../constants";

export const errorsCounter = (targetWord: string) => {
  let found = false;

  data.errors.forEach((item: ErrorsType) => {
    if (item.word === targetWord) {
      item.errors += COUNTER_UNIT;
      found = true;
    }
  });

  if (!found) {
    data.errors.push({ word: targetWord, errors: COUNT_INITIAL_VAL });
  }
};

export const hasReachedErrorLimit = (
  word: string,
  errors: ErrorsType[],
  errorLimit: number
): boolean => {
  const wordEntry = errors.find((entry: ErrorsType) => entry.word === word);
  return wordEntry?.errors === errorLimit - COUNTER_UNIT;
};

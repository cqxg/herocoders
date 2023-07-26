import { data } from "../mocks";
import { LETTERS, ERRORS_LIMIT, COUNT_INITIAL_VAL } from "../constants";

import { isCorrectCheck } from "./isCorrectCheck";
import { showCorrectWord } from "./showCorrectWord";
import { errorsCounter, hasReachedErrorLimit } from "./errorsCounter";

export const keypressObserver = (e: KeyboardEvent): void => {
  if (LETTERS) {
    let matchedElement = null;

    for (let i = COUNT_INITIAL_VAL; i < LETTERS.children.length; i++) {
      const element = LETTERS.children[i];

      if (element.textContent === e.key) {
        matchedElement = element;
        break;
      }
    }

    if (matchedElement) {
      isCorrectCheck(matchedElement as HTMLElement, e.key);
    } else {
      errorsCounter(data.auxiliaryWord);
      if (hasReachedErrorLimit(data.auxiliaryWord, data.errors, ERRORS_LIMIT)) {
        showCorrectWord();
      }
    }
  }
};

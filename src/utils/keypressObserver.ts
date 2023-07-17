import { data } from "../mocks";
import { showCorrectWord } from "./showCorrectWord";
import { errorsCounter, hasReachedErrorLimit } from "./errorsCounter";
import {
  LETTERS,
  ERRORS_LIMIT,
  COUNT_INITIAL_VAL,
  PROCESSING_TIMEOUT,
} from "../constants";

let isProcessing = false;

export const keypressObserver = (e: KeyboardEvent) => {
  if (isProcessing) {
    return;
  }

  isProcessing = true;

  const clickEvent = new MouseEvent("click", {
    bubbles: true,
    cancelable: true,
    view: window,
  });

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
      matchedElement?.dispatchEvent(clickEvent);
      isProcessing = false;
    } else {
      errorsCounter(data.auxiliaryWord);
      if (hasReachedErrorLimit(data.auxiliaryWord, data.errors, ERRORS_LIMIT)) {
        showCorrectWord();
        setTimeout(() => (isProcessing = false), PROCESSING_TIMEOUT);
      } else {
        isProcessing = false;
      }
    }
  }
};

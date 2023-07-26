import {
  ANSWER,
  LETTERS,
  COUNTER_UNIT,
  COUNT_INITIAL_VAL,
  PROCESSING_TIMEOUT,
} from "../constants";
import { data, errorLetterStyles } from "../mocks";

import { letter } from "../components/letter";

import { keypressObserver } from "./keypressObserver";
import { renderShuffledWords } from "./renderShuffledWords";

export const showCorrectWord = (): void => {
  while (LETTERS?.firstChild) {
    LETTERS?.removeChild(LETTERS?.firstChild);
  }

  data.auxiliaryWord.split("").forEach((symbol: string): void => {
    letter(symbol);
  });

  if (LETTERS) {
    for (let i = COUNT_INITIAL_VAL; i < LETTERS.children.length; i++) {
      const element = LETTERS?.children[i] as HTMLElement;
      element.style.cssText = errorLetterStyles;
    }
  }

  document.removeEventListener("keyup", keypressObserver);

  setTimeout((): void => {
    data.currentWordIndex = data.currentWordIndex + COUNTER_UNIT;

    while (ANSWER?.firstChild) {
      ANSWER?.removeChild(ANSWER?.firstChild);
    }
    while (LETTERS?.firstChild) {
      LETTERS?.removeChild(LETTERS?.firstChild);
    }
    renderShuffledWords();

    document.addEventListener("keyup", keypressObserver);
  }, PROCESSING_TIMEOUT);
};

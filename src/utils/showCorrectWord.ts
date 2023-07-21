import { letter } from "../components/letter";
import { data, errorLetterStyles } from "../mocks";
import { renderShuffledWords } from "./renderShuffledWords";
import {
  ANSWER,
  LETTERS,
  COUNTER_UNIT,
  COMMON_TIMEOUT,
  COUNT_INITIAL_VAL,
} from "../constants";

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

  setTimeout((): void => {
    data.currentWordIndex = data.currentWordIndex + COUNTER_UNIT;

    while (ANSWER?.firstChild) {
      ANSWER?.removeChild(ANSWER?.firstChild);
    }
    while (LETTERS?.firstChild) {
      LETTERS?.removeChild(LETTERS?.firstChild);
    }
    renderShuffledWords();
  }, COMMON_TIMEOUT);
};

import {
  ANSWER,
  COUNTER_UNIT,
  ERRORS_LIMIT,
  COUNT_INITIAL_VAL,
  PROCESSING_TIMEOUT,
} from "../constants";
import { ErrorsType } from "../types";
import { answerLetterStyles, data } from "../mocks";

import { letterToggler } from "./letterToggler";
import { showCorrectWord } from "./showCorrectWord";
import { renderShuffledWords } from "./renderShuffledWords";
import { errorsCounter, hasReachedErrorLimit } from "./errorsCounter";

export const isCorrectCheck = (
  currentTarget: HTMLElement,
  symbol: string
): void => {
  const isSymbolCorrect = Array.from(symbol).every(
    (char: string, index: number): boolean => char === data.currentWord[index]
  );

  if (isSymbolCorrect) {
    const answerLetter = document.createElement("div");
    data.currentWord = data.currentWord.slice(COUNTER_UNIT);

    answerLetter.style.cssText = answerLetterStyles;
    answerLetter.textContent = symbol;

    currentTarget.remove();
    ANSWER?.appendChild(answerLetter);
  } else {
    errorsCounter(data.auxiliaryWord);
    letterToggler(true, currentTarget);
    setTimeout(() => letterToggler(false, currentTarget), PROCESSING_TIMEOUT);

    if (hasReachedErrorLimit(data.auxiliaryWord, data.errors, ERRORS_LIMIT)) {
      showCorrectWord();
    }
  }

  if (data.currentWord.length === COUNT_INITIAL_VAL) {
    data.currentWordIndex = data.currentWordIndex + COUNTER_UNIT;

    while (ANSWER?.firstChild) {
      ANSWER?.removeChild(ANSWER?.firstChild);
    }

    let found = false;

    data.errors.forEach((item: ErrorsType): void => {
      if (item.word === data.auxiliaryWord) {
        found = true;
      }
    });

    if (!found) {
      data.errors.push({ word: data.auxiliaryWord, errors: COUNT_INITIAL_VAL });
    }

    renderShuffledWords();
  }
};

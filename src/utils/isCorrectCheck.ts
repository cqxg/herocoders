import {
  ANSWER,
  COUNTER_UNIT,
  ERRORS_LIMIT,
  COUNT_INITIAL_VAL,
} from "../constants";
import { ErrorsType } from "../types";
import { showCorrectWord } from "./showCorrectWord";
import { answerLetterStyles, data } from "../mocks";
import { renderShuffledWords } from "./renderShuffledWords";
import { errorsCounter, hasReachedErrorLimit } from "./errorsCounter";

export const isCorrectCheck = (e: MouseEvent, symbol: string) => {
  const currentTarget = e.target as HTMLElement;
  const isSymbolCorrect = Array.from(symbol).every(
    (char: string, index: number) => char === data.currentWord[index]
  );

  if (isSymbolCorrect) {
    const answerLetter = document.createElement("div");
    data.currentWord = data.currentWord.slice(COUNTER_UNIT);
    currentTarget.remove();

    answerLetter.style.cssText = answerLetterStyles;

    answerLetter.textContent = symbol;
    ANSWER?.appendChild(answerLetter);
  } else {
    errorsCounter(data.auxiliaryWord);
    currentTarget.style.background = "#a10e2c";
    currentTarget.style.boxShadow = "0px 0px 2px 4px #dc8499";

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

    data.errors.forEach((item: ErrorsType) => {
      if (item.word === data.auxiliaryWord) {
        item.errors += COUNTER_UNIT;
        found = true;
      }
    });

    if (!found) {
      data.errors.push({ word: data.auxiliaryWord, errors: COUNT_INITIAL_VAL });
    }

    renderShuffledWords();
  }
};
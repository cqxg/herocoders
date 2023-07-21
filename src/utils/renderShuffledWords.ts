import { data } from "../mocks";
import { letter } from "../components/letter";
import { statistic } from "../components/statistic";
import {
  COUNTER_UNIT,
  TASKS_NUMBER,
  TOTAL_QUESTIONS,
  CURRENT_QUESTION,
} from "../constants";

export const renderShuffledWords = (): void => {
  if (data.currentWordIndex === TASKS_NUMBER) {
    statistic();
    return;
  }

  data.shuffledWords.forEach((words: string[], index: number): void => {
    if (data.currentWordIndex === index) {
      data.currentWord = data.randomElements[index];
      data.auxiliaryWord = data.randomElements[index];

      words.forEach((symbol: string): void => {
        letter(symbol);
      });
    }
  });

  if (TOTAL_QUESTIONS) {
    TOTAL_QUESTIONS.textContent = String(TASKS_NUMBER);
  }
  if (CURRENT_QUESTION) {
    CURRENT_QUESTION.textContent = String(data.currentWordIndex + COUNTER_UNIT);
  }
};

import { data } from "../mocks";
import { ErrorsType } from "../types";
import { COUNT_INITIAL_VAL } from "../constants";

export const statisticsElements = () => {
  const elements = [];
  let wordsWithMaxErrors;

  const totalErrors = data.errors.reduce(
    (total: number, entry: ErrorsType) => total + entry.errors,
    COUNT_INITIAL_VAL
  );

  const wordsWithoutErrors = data.errors.filter(
    (entry: ErrorsType) => entry.errors === COUNT_INITIAL_VAL
  ).length;

  elements.push({ tagName: "h2", textContent: "Statistic:" });

  elements.push({
    tagName: "div",
    textContent: `Number of errors: ${
      totalErrors > COUNT_INITIAL_VAL ? totalErrors : String(COUNT_INITIAL_VAL)
    }`,
  });

  elements.push({
    tagName: "div",
    textContent: `Number of words without errors: ${
      wordsWithoutErrors > COUNT_INITIAL_VAL
        ? wordsWithoutErrors
        : String(COUNT_INITIAL_VAL)
    }`,
  });

  const maxErrors = Math.max(
    ...data.errors.map((entry: ErrorsType) => entry.errors)
  );

  if (maxErrors > COUNT_INITIAL_VAL) {
    wordsWithMaxErrors = data.errors
      .filter((entry: ErrorsType) => entry.errors === maxErrors)
      .map((entry: ErrorsType) => entry.word)
      .join(", ");
  } else {
    wordsWithMaxErrors = "You didn't make any mistakes!";
  }

  elements.push({
    tagName: "div",
    textContent: `Words with the most errors: ${wordsWithMaxErrors}`,
  });

  return elements;
};

import { DataType } from "./types";
import { ANSWER, CONTAINER, COUNT_INITIAL_VAL, LETTERS } from "./constants";

export const words = [
  "sun",
  "data",
  "task",
  "apple",
  "button",
  "symbol",
  "timeout",
  "tragedy",
  "software",
  "function",
  "application",
];

const commonStyles = `
  color: white;
  margin: 5px;
  width: 40px;
  height: 40px;
  display: flex;
  cursor: pointer;
  border-radius: 6px;
  align-items: center;
  justify-content: center;
`;

export const proposedLetterStyles = `
  ${commonStyles}
  background: #007bff;
`;

export const answerLetterStyles = `
  ${commonStyles}
  background: #2caf45;
`;

export const errorLetterStyles = `
  ${commonStyles}
  background: #a10e2c;
  pointer-events: none;
  transition: transform 0.5s ease;
  box-shadow: 0px 0px 2px 4px #dc8499;
`;

const randomElements = words.sort(() => Math.random() - 0.5).slice(0, 6);

const shuffledWords = randomElements.map((word) =>
  word.split("").sort(() => Math.random() - 0.5)
);

export const data: DataType = {
  errors: [],
  currentWord: "",
  auxiliaryWord: "",
  shuffledWords: shuffledWords,
  randomElements: randomElements,
  currentWordIndex: COUNT_INITIAL_VAL,
};

CONTAINER?.classList.add(
  "mb-5",
  "d-flex",
  "flex-column",
  "align-items-center",
  "justify-content-center"
);

ANSWER?.classList.add("d-flex", "justify-content-center");
LETTERS?.classList.add("d-flex", "justify-content-center");

export type ErrorsType = {
  word: string;
  errors: number;
};

export type DataType = {
  errors: ErrorsType[];
  currentWord: string;
  auxiliaryWord: string;
  currentWordIndex: number;
  shuffledWords: string[][];
  randomElements: string[];
};

export type StatisticElementType = {
  tagName: string;
  textContent: string;
};

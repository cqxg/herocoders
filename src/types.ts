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

export type ElementType = {
  tagName: string;
  textContent: string;
};

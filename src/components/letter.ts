import { LETTERS } from "../constants";
import { proposedLetterStyles } from "../mocks";
import { isCorrectCheck } from "../utils/isCorrectCheck";

export const letter = (symbol: string) => {
  const letterElement = document.createElement("div");

  letterElement.id = "letter";
  letterElement.textContent = symbol;
  letterElement.style.cssText = proposedLetterStyles;

  LETTERS?.appendChild(letterElement);

  letterElement.addEventListener("click", (e: MouseEvent) =>
    isCorrectCheck(e, symbol)
  );
  letterElement.addEventListener(
    "mouseenter",
    () => (letterElement.style.background = "#005ec3")
  );
  letterElement.addEventListener("mouseleave", () => {
    letterElement.style.background = "#007bff";
    letterElement.style.boxShadow = "";
  });
};

import { keypressObserver } from "./keypressObserver";

export const letterToggler = (disable: boolean, target: HTMLElement): void => {
  if (disable) {
    target.style.background = "#a10e2c";
    target.style.boxShadow = "0px 0px 2px 4px #dc8499";
    document.removeEventListener("keyup", keypressObserver);
  } else {
    target.style.background = "#007bff";
    target.style.boxShadow = "none";
    document.addEventListener("keyup", keypressObserver);
  }
};

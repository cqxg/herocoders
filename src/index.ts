import { keypressObserver } from "./utils/keypressObserver";
import { renderShuffledWords } from "./utils/renderShuffledWords";

const App = (): void => {
  renderShuffledWords();

  document.addEventListener("keyup", keypressObserver);
};

document.addEventListener("DOMContentLoaded", App);

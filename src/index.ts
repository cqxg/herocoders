import { keypressObserver } from "./utils/keypressObserver";
import { renderShuffledWords } from "./utils/renderShuffledWords";

const App = () => {
  renderShuffledWords();

  document.addEventListener("keyup", keypressObserver);
};

document.addEventListener("DOMContentLoaded", App);

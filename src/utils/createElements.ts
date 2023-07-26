import { ElementType } from "../types";

export const createElements = (
  parent: HTMLElement,
  elements: ElementType[]
): void => {
  elements.forEach((element: ElementType): void => {
    const { tagName, textContent } = element;
    const el = document.createElement(tagName);
    el.textContent = textContent;
    parent?.appendChild(el);
  });
};

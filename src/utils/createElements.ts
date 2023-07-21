import { StatisticElementType } from "../types";

export const createElements = (
  parent: HTMLElement,
  elements: StatisticElementType[]
): void => {
  elements.forEach((element: StatisticElementType): void => {
    const { tagName, textContent } = element;
    const el = document.createElement(tagName);
    el.textContent = textContent;
    parent?.appendChild(el);
  });
};

import { StatisticElementType } from "../types";

export const createElements = (
  parent: HTMLElement,
  elements: StatisticElementType[]
) => {
  elements.forEach((element: StatisticElementType) => {
    const { tagName, textContent } = element;
    const el = document.createElement(tagName);
    el.textContent = textContent;
    parent?.appendChild(el);
  });
};

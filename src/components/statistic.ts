import { CONTAINER } from "../constants";
import { statisticsElements } from "../utils/getStatisticsElements";
import { createElements } from "../utils/createElements";

export const statistic = (): void => {
  while (CONTAINER?.firstChild) {
    CONTAINER.removeChild(CONTAINER.firstChild);
  }

  createElements(CONTAINER, statisticsElements());
};

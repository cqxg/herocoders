import { CONTAINER } from "../constants";

import { createElements } from "../utils/createElements";
import { statisticsElements } from "../utils/getStatisticsElements";

export const statistic = (): void => {
  while (CONTAINER?.firstChild) {
    CONTAINER.removeChild(CONTAINER.firstChild);
  }

  createElements(CONTAINER, statisticsElements());
};

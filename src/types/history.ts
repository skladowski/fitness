import { ActivityType } from "./activity";
import { Metrics } from "./metrics";
export type HistorySummaryEntity = {
  id: string;
  type: ActivityType;
  trend: number;
  metrics: Metrics;
};

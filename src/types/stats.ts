import { ActivityType } from "./activity";
import { Metrics } from "./metrics";
export type StatsData = {
  id: string;
  type: ActivityType;
  trend: number;
  metrics: Metrics;
};

export type StatsDayEntity = {
  date: string;
  stats: StatsData[];
};

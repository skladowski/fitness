import { ActivityType } from "../types/activity";
import { StatsDayEntity, StatsEntity } from "../types/stats";

export function transformStatsForChart(
  StatsEntity: StatsDayEntity[],
  {
    getValueFn,
    transform,
  }: {
    getValueFn: (stats: StatsEntity[]) => number;
    transform: (val: number) => number;
  },
) {
  const transformedData = StatsEntity.map((day, index) => {
    const showMonth =
      index === StatsEntity.length - 1 ||
      new Date(day.date).getMonth() !==
        new Date(StatsEntity[index + 1].date).getMonth();

    return {
      name: new Date(day.date).toLocaleDateString(
        "ru-RU",
        showMonth ? { day: "numeric", month: "short" } : { day: "numeric" },
      ),
      value: transform(getValueFn(day.stats)),
    };
  });
  return transformedData;
}

export function getChartDataByType(
  StatsEntity: StatsDayEntity[],
  type: ActivityType,
  metricKey: string,
  transformFn = (val: number) => val,
) {
  return transformStatsForChart(StatsEntity, {
    getValueFn: (stats) =>
      stats.find((stat) => stat.type === type)?.metrics[metricKey]?.current ||
      0,
    transform: transformFn,
  });
}

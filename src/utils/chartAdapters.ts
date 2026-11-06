type CurrentSet = {
  current: number;
};
type Metrics = {
  [MetricKey: string]: CurrentSet;
};
type StatsSet = {
  type: string;
  metrics: Metrics;
};
type Day = {
  date: string;
  stats: StatsSet[];
};

export function transformStatsForChart(
  statsData: Day[],
  {
    getValueFn,
    transform,
  }: {
    getValueFn: (stats: StatsSet[]) => number;
    transform: (val: number) => number;
  },
) {
  const transformedData = statsData.map((day, index) => {
    const showMonth =
      index === statsData.length - 1 ||
      new Date(day.date).getMonth() !==
        new Date(statsData[index + 1].date).getMonth();

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
  statsData: Day[],
  type: string,
  metricKey: string,
  transformFn = (val: number) => val,
) {
  return transformStatsForChart(statsData, {
    getValueFn: (stats) =>
      stats.find((stat) => stat.type === type)?.metrics[metricKey]?.current ||
      0,
    transform: transformFn,
  });
}

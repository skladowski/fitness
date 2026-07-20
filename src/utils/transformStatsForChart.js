export function transformStatsForChart(statsData, { getValueFn }) {
  const transformedData = statsData.map((day) => {
    return {
      name: new Date(day.date).toLocaleDateString("ru-RU", {
        day: "numeric",
      }),
      value: getValueFn(day.stats),
    };
  });
  return transformedData;
}

export function getChartDataByType(statsData, type, metricKey) {
  return transformStatsForChart(statsData, {
    getValueFn: (stats) =>
      stats.find((stat) => stat.type === type)?.metrics[metricKey]?.current ||
      0,
  });
}

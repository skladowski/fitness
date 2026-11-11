export type Metrics = {
  [MetricKey: string]: CurrentSet;
};
export type CurrentSet = {
  current: number;
};

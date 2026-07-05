import { activities } from "../../constant/activities";
import { formatDuration } from "../../utils/formatDuration";
import { formatRelativeDate } from "../../utils/formatRelativeDate";
export function WorkoutItem({ type, metrics, timestamp, title, exercises }) {
  const localMetrics = { ...metrics };
  const activityConfig = activities[type];
  if (!activityConfig) return null;
  const { color, label, icon } = activityConfig;
  const formattedTime = formatRelativeDate(timestamp);
  const formattedDuration = formatDuration(localMetrics.duration.current);
  const kcal = localMetrics.burnedKcal.current;
  const kcalColor = activities.CALORIES.color;
  const kcalUnit = activities.CALORIES.metrics.burned.unit;
  let totalVolume = null;
  if (type === "POWER" && exercises) {
    totalVolume = exercises.reduce((total, exercises) => {
      return (
        total +
        exercises.sets.reduce((total, set) => {
          return total + set.weight * set.reps;
        }, 0)
      );
    }, 0);
  }
  if (totalVolume) {
    localMetrics.totalVolume = { current: totalVolume };
  }
  const formattedMetrics = Object.keys(localMetrics)
    .filter((key) => {
      const metricConfig = activityConfig.metrics[key];
      return metricConfig && !metricConfig.isPrimary;
    })
    .map((key) => {
      const value = localMetrics[key];
      const config = activityConfig.metrics[key];
      const transformedValue = config.transform
        ? config.transform(value.current)
        : value.current;
      return `${transformedValue} ${config.unit}`;
    })
    .filter(Boolean)
    .join(" · ");
  return (
    <div className={`workout-item ${type.toLowerCase()}`}>
      <div className="wo-icon" style={{ background: color }}>
        {icon}
      </div>
      <div className="wo-info">
        <div className="wo-name">{title || label}</div>
        <div className="wo-sub">{formattedMetrics}</div>
        <div className="wo-time"> {formattedTime}</div>
      </div>
      <div className="wo-right">
        <div className="wo-cal" style={{ color: kcalColor }}>
          {kcal} {kcalUnit}
        </div>
        <div className="wo-dur">{formattedDuration}</div>
      </div>
    </div>
  );
}

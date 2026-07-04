import { activities } from "../../constant/activities";
import { formatDuration } from "../../utils/formatDuration";
import { formatRelativeDate } from "../../utils/formatRelativeDate";
export function WorkoutItem({ type, metrics, timestamp, title }) {
  const activityConfig = activities[type];
  if (!activityConfig) return null;
  const { color, label, icon } = activityConfig;
  const formattedTime = formatRelativeDate(timestamp);
  const formattedDuration = formatDuration(metrics.duration.current);
  const kcal = metrics.burnedKcal.current;
  const formattedMetrics = Object.keys(metrics)
    .filter((key) => key !== "duration" && key !== "burnedKcal")
    .map((key) => {
      const value = metrics[key];
      const config = activityConfig.metrics[key];
      const transformedValue = config.transform
        ? config.transform(value.current)
        : value.current;
      return `${transformedValue} ${config.unit}`;
    })
    .filter(Boolean)
    .join(" · ");
  return (
    <div className={`workout-item ${label || label}`}>
      <div className="wo-icon" style={{ background: color }}>
        {icon}
      </div>
      <div className="wo-info">
        <div className="wo-name">{title}</div>
        <div className="wo-sub">{formattedMetrics}</div>
        <div className="wo-time"> {formattedTime}</div>
      </div>
      <div className="wo-right">
        <div className="wo-cal" style={{ color }}>
          {kcal}
        </div>
        <div className="wo-dur">{formattedDuration}</div>
      </div>
    </div>
  );
}

import { activities } from "../../constant/activities";

export function WorkoutItem({
  id,
  type,
  meta,
  kcalColor,
  burnedKcal,
  backgroundColor,
  time,
  icon,
}) {
  /*const activityConfig = activities[type];
  if (!activityConfig) return null;
  const formattedMetrics = Object.keys(metrics)
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
    */
  return (
    <div className={`workout-item ${id}`}>
      <div className="wo-icon" style={{ background: backgroundColor }}>
        {icon}
      </div>
      <div className="wo-info">
        <div className="wo-name">{type}</div>
        <div className="wo-sub">{meta}</div>
      </div>
      <div className="wo-right">
        <div className="wo-cal" style={{ color: kcalColor }}>
          {burnedKcal}
        </div>
        <div className="wo-dur">{time}</div>
      </div>
    </div>
  );
}

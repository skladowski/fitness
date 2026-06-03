export function WorkoutItem({
  id,
  type,
  meta,
  kcalColor,
  burnedKcal,
  backgroundColor,
  time,
  icon
}) {
  return (
    <div className={`workout-item ${id}`}>
      <div className="wo-icon" style={{ background: backgroundColor }}>{icon}</div>
      <div className="wo-info">
        <div className="wo-name">{type}</div>
        <div className="wo-sub">{meta}</div>
      </div>
      <div className="wo-right">
        <div className="wo-cal" style={{ color: kcalColor }}>{burnedKcal}</div>
        <div className="wo-dur">{time}</div>
      </div>
    </div>
  );
}

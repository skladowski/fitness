import "./StatCard.css";
export function StatCard({
  icon,
  value,
  label,
  unit,
  // statProgress,
  widthPercent,
  //meta,
  goalText,
  trendText,
  type,
  variant,
}) {
  const statusClass = trendText
    ? trendText.startsWith("+")
      ? "positive"
      : "negative"
    : "neutral"; // проверяем какой класс присвоить

  return (
    <div
      className={`stat-card ${type.toLowerCase()} ${variant ? variant : ""} `}
    >
      <div className="stat-icon">{icon}</div>

      <div className="stat-info">
        <div className="stat-value">
          <span className="number">{value}</span>
          <span className="unit">{unit}</span>
        </div>
        <div className="stat-label">{label}</div>
      </div>

      {variant !== "horizontal" && (
        <div className={`stat-progress-track`}>
          <div
            className="stat-progress-fill"
            style={{ width: `${widthPercent}%` }}
          ></div>
        </div>
      )}
      <div className="stat-meta">
        {goalText}
        {goalText && trendText && <span> · </span>}
        <span className={statusClass}> {trendText} </span>{" "}
        {variant !== "horizontal" && <span> </span>}
      </div>
    </div>
  );
}

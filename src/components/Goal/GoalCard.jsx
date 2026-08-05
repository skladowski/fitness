import "./GoalCard.css";
export function GoalCard({
  value,
  label,
  icon,
  min,
  max,
  step,
  presets,
  color,
  type,
  unit,
  onGoalChange,
  textColor,
}) {
  return (
    <div className={`goal-card ${type.toLowerCase()}`}>
      <div className="gc-head">
        <div className="gc-icon" style={{ background: color }}>
          <span>{icon}</span>
        </div>
        <div>
          <div className="gc-title">{label}</div>
          <div className="gc-sub">Цель на день</div>
        </div>
      </div>

      <div className="gc-display">
        <span style={{ color: textColor }} className="gc-number">
          {value.toLocaleString("ru-RU")}
        </span>
        <span className="gc-unit">{unit}</span>
      </div>

      <div className="gc-slider-wrap">
        <input
          type="range"
          className="gc-slider"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(e) => onGoalChange(type, e.target.value)}
        />
        <div className="gc-range-labels">
          <span>{min}</span>
          <span>{max}</span>
        </div>
      </div>

      <div className="gc-presets">
        {presets.map((item) => {
          return (
            <button
              key={item.label}
              className={`gc-preset ${item.value === value ? "active" : ""}  `}
              onClick={() => onGoalChange(type, item.value)}
            >
              {item.label}
            </button>
          );
        })}
      </div>

      <div className="gc-progress-label">
        <span>
          Сегодня: <b>8 432</b>
        </span>
        <span>84%</span>
      </div>

      <div className="gc-track">
        <div className="gc-fill" style={{ width: "84%" }}></div>
      </div>
    </div>
  );
}

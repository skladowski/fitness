import "./GoalCard.css";
export function GoalCard({
  value,
  label,
  icon,
  min,
  max,
  presets,
  color,
  type,
  unit,
}) {
  console.log(color);
  return (
    <div className={`goal-card ${type.toLowerCase()}`}>
      <div className="gc-head">
        <div className="gc-icon" style={{ background: color }}>
          <svg
            width="18"
            height="18"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path d="M13 4v4l3 3-3 5-4-2-2 4" />
            <circle cx="13" cy="3" r="1" fill="currentColor" stroke="none" />
          </svg>
        </div>
        <div>
          <div className="gc-title">{label}</div>
          <div className="gc-sub">Цель на день</div>
        </div>
      </div>

      <div className="gc-display">
        <span className="gc-number">{value}</span>
        <span className="gc-unit">{unit}</span>
      </div>

      <div className="gc-slider-wrap">
        <input
          type="range"
          className="gc-slider"
          min={min}
          max={max}
          step="500"
          defaultValue={value}
          onChange={(e) => onSlider("steps", e.target.value)}
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
              className="gc-preset"
              onClick={() => setPreset(type, item.value)}
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

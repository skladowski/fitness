export function NutritionItem({
  label,
  current,
  target,
  type,
  unit, // граммы
  color,
}) {
  const progress = target > 0 ? Math.min((current / target) * 100, 100) : 0;
  return (
    <div className={`macro-item ${type}`}>
      <div className="macro-top">
        <span className="macro-name">{label}</span>
        <span className="macro-nums">
          {Math.round(current)}
          {unit} / {target}
          <span> {unit} </span>
        </span>
      </div>
      <div className="macro-track">
        <div
          className="macro-fill"
          style={{ width: progress + "%", background: color }}
        ></div>
      </div>
    </div>
  );
}

export function NutritionItem({
  id,
  label,
  current,
  target,
  unit, // граммы 
  color,
}) {
  const progress = (current / target) * 100
  return (
    <div className={`macro-item ${id}`}>
      <div className="macro-top">
        <span className="macro-name">{label}</span>
        <span className="macro-nums">{current}{unit} / {target}{unit}</span>
      </div>
      <div className="macro-track">
        <div className="macro-fill" style={{ width: progress + '%', background: color }}></div>
      </div>
    </div>
  );
}
import "./LoggerActionBar.css";
export function LoggerActionBar({ onFinish }) {
  return (
    <div className="logger-actionbar">
      <div className="calorie-indicator">
        <span className="calorie-icon">🔥</span>
        <div>
          <div className="calorie-label">Калории</div>
          <div className="calorie-val">248</div>
        </div>
      </div>
      <button className="finish-btn" onClick={() => onFinish()}>
        Завершить тренировку
      </button>
    </div>
  );
}

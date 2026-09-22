import "./LoggerActionBar.css";
export function LoggerActionBar({ onFinish }) {
  return (
    <div className="logger-actionbar">
      <button className="finish-btn" onClick={() => onFinish()}>
        Завершить тренировку
      </button>
    </div>
  );
}

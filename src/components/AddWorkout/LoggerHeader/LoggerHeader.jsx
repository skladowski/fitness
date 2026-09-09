import "./LoggerHeader.css";
export function LoggerHeader() {
  return (
    <header className="logger-header">
      <div className="logger-activity">
        <div
          className="logger-activity-icon"
          style={{ "--cat-tint": "rgba(251,146,60,0.16)" }}
        >
          🏋️
        </div>
        <div>
          <div className="logger-activity-name">Силовая тренировка</div>
          <div className="logger-activity-status">
            <span className="dot"></span>Идёт запись
          </div>
        </div>
      </div>

      <div className="logger-timer mono-timer">00:12:34</div>

      <div className="logger-header-actions">
        <button className="icon-btn" title="Пауза">
          ⏸
        </button>
        <button className="icon-btn stop" title="Стоп">
          ⏹
        </button>
      </div>
    </header>
  );
}

import "../LoggerBody.css";
import "./RunLogger.css";
export function RunLogger() {
  return (
    <div className="logger-body">
      <div className="cardio-area">
        <div className="cardio-field">
          <div className="cardio-label">Дистанция</div>
          <input
            className="cardio-input"
            type="text"
            inputMode="decimal"
            placeholder="0.0"
            defaultValue="4.2"
          />
          <div className="cardio-unit">км</div>
        </div>
        <div className="cardio-field">
          <div className="cardio-label">Темп</div>
          <input
            className="cardio-input"
            type="text"
            inputMode="numeric"
            placeholder="0:00"
            defaultValue="5:44"
          />
          <div className="cardio-unit">мин/км</div>
        </div>
        <div className="cardio-hint">
          Значения можно ввести вручную или дождаться данных с датчика
        </div>
      </div>
    </div>
  );
}

import "../LoggerBody.css";
import "./YogaLogger.css";
export function YogaLogger({ sessionDetails, onChange }) {
  return (
    <div className="logger-body">
      <div className="recovery-area">
        <div className="recovery-field">
          <div className="cardio-label">Цель по времени</div>
          <input
            className="cardio-input"
            type="text"
            inputMode="numeric"
            placeholder="0:00"
            value={sessionDetails.time}
            onChange={(e) => onChange("time", e.target.value)}
          />
          <div className="cardio-unit">мин</div>
        </div>

        <div className="recovery-note">
          <div className="recovery-note-label">Заметка о практике</div>
          <textarea
            className="recovery-textarea"
            placeholder="Какие асаны, что получилось, на чём сфокусироваться в следующий раз…"
            value={sessionDetails.note}
            onChange={(e) => onChange("note", e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}

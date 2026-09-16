import "../LoggerBody.css";
import "./CyclingLogger.css";
export function CyclingLogger({ onChange, sessionDetails }) {
  return (
    <div className="logger-body">
      <div className="cycling-area">
        <div className="cycling-hero">
          <div className="cycling-hero-label">Дистанция</div>
          <div className="cycling-hero-value">
            <input
              className="cycling-hero-input"
              type="text"
              inputMode="decimal"
              placeholder="0.0"
              value={sessionDetails.distance}
              onChange={(e) => onChange("distance", e.target.value)}
            />
            <span className="cycling-hero-unit">км</span>
          </div>
        </div>

        <div className="cycling-substats">
          <div className="substat">
            <span className="substat-icon">⚡</span>
            <div>
              <div className="substat-label">Скорость</div>
              <input
                className="substat-input"
                type="text"
                inputMode="decimal"
                placeholder="0.0"
                value={sessionDetails.speed}
                onChange={(e) => onChange("speed", e.target.value)}
              />
            </div>
            <span className="substat-unit">км/ч</span>
          </div>
          <div className="substat">
            <span className="substat-icon">🔄</span>
            <div>
              <div className="substat-label">Каденс</div>
              <input
                className="substat-input"
                type="text"
                inputMode="numeric"
                placeholder="0"
                value={sessionDetails.cadence}
                onChange={(e) => onChange("cadence", e.target.value)}
              />
            </div>
            <span className="substat-unit">об/мин</span>
          </div>
          <div className="substat">
            <span className="substat-icon">⛰️</span>
            <div>
              <div className="substat-label">Набор высоты</div>
              <input
                className="substat-input"
                type="text"
                inputMode="numeric"
                placeholder="0"
                value={sessionDetails.elevation}
                onChange={(e) => onChange("elevation", e.target.value)}
              />
            </div>
            <span className="substat-unit">м</span>
          </div>
        </div>
      </div>
    </div>
  );
}

import "../LoggerBody.css";
import "./CyclingLogger.css";
export function CyclingLogger() {
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
              defaultValue="14.6"
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
                defaultValue="21.3"
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
                defaultValue="84"
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
                defaultValue="212"
              />
            </div>
            <span className="substat-unit">м</span>
          </div>
        </div>
      </div>
    </div>
  );
}

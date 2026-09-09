import "../LoggerBody.css";
import "./PowerLogger.css";
import { SetRow } from "../SetRow/SetRow";
export function PowerLogger() {
  return (
    <div className="logger-body">
      <div className="exercise-card">
        <div className="exercise-card-head">
          <div className="exercise-name">Жим лёжа</div>
          <div className="exercise-meta">Штанга · грудь</div>
        </div>
        <SetRow />

        <div className="set-row active">
          <div className="set-index">2</div>
          <div className="set-input-wrap">
            <input
              className="set-input"
              type="text"
              inputMode="numeric"
              placeholder="65"
            />
            <span className="set-input-unit">кг</span>
          </div>
          <div className="set-input-wrap">
            <input
              className="set-input"
              type="text"
              inputMode="numeric"
              placeholder="8"
            />
            <span className="set-input-unit">повт</span>
          </div>
          <input className="set-check-input" type="checkbox" id="set-1-2" />
          <label className="set-check-label" htmlFor="set-1-2">
            ✓
          </label>
        </div>

        <button className="add-set-btn">+ Добавить подход</button>
      </div>

      <div className="exercise-card">
        <div className="exercise-card-head">
          <div className="exercise-name">Тяга верхнего блока</div>
          <div className="exercise-meta">Тренажёр · спина</div>
        </div>

        <div className="set-row">
          <div className="set-index">1</div>
          <div className="set-input-wrap">
            <input
              className="set-input"
              type="text"
              inputMode="numeric"
              placeholder="40"
            />
            <span className="set-input-unit">кг</span>
          </div>
          <div className="set-input-wrap">
            <input
              className="set-input"
              type="text"
              inputMode="numeric"
              placeholder="12"
            />
            <span className="set-input-unit">повт</span>
          </div>
          <input className="set-check-input" type="checkbox" id="set-2-1" />
          <label className="set-check-label" htmlFor="set-2-1">
            ✓
          </label>
        </div>

        <button className="add-set-btn">+ Добавить подход</button>
      </div>
    </div>
  );
}

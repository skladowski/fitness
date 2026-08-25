import "./PhysicalMetricsEditForm.css";
import {
  calculateBMI,
  getBMIStatus,
  calculateTDEE,
  calculateAge,
} from "../../utils/healthMath";
import { ACTIVITY_LEVELS } from "../../constant/activityLevels";

export function PhysicalMetricsEditForm({
  bodyMetrics,
  personalInfo,
  onChange,
}) {
  const bmi = calculateBMI(bodyMetrics.weight, bodyMetrics.height);
  const bmiStatus = getBMIStatus(bmi);
  const age = calculateAge(personalInfo.birthDate);
  const { tdee } = calculateTDEE(
    bodyMetrics.weight,
    bodyMetrics.height,
    age,
    bodyMetrics.levelActivity,
    personalInfo.gender,
  );

  return (
    <div className="card">
      <div className="card-header">
        <div className="card-title-wrap">
          <div className="card-icon card-icon-metrics">
            <svg
              width="15"
              height="15"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M18 20V10M12 20V4M6 20v-6" />
            </svg>
          </div>
          <div>
            <div className="card-title">Физические показатели</div>
            <div className="card-sub">Используются для расчёта ИМТ и TDEE</div>
          </div>
        </div>
      </div>

      <div className="form-grid">
        <div className="form-field">
          <label className="form-label" htmlFor="height-input">
            Рост
          </label>
          <div className="input-wrap">
            <input
              id="height-input"
              className="form-input"
              type="number"
              value={bodyMetrics.height}
              onChange={(e) => onChange("height", Number(e.target.value))}
            />
            <span className="input-unit">см</span>
          </div>
        </div>

        <div className="form-field">
          <label className="form-label" htmlFor="weight-input">
            Вес
          </label>
          <div className="input-wrap">
            <input
              id="weight-input"
              className="form-input"
              type="number"
              step="0.1"
              value={bodyMetrics.weight}
              onChange={(e) => onChange("weight", Number(e.target.value))}
            />
            <span className="input-unit">кг</span>
          </div>
        </div>

        <div className="form-field full">
          <label className="form-label" htmlFor="fat-input">
            Процент жира в организме
          </label>
          <div className="input-wrap">
            <input
              id="fat-input"
              className="form-input"
              type="number"
              step="0.1"
              value={bodyMetrics.fatPercent}
              onChange={(e) => onChange("fatPercent", Number(e.target.value))}
            />
            <span className="input-unit">%</span>
          </div>
          <span className="form-hint-text">
            Необязательно. Оставьте пустым, если не знаете точное значение
          </span>
        </div>

        <div className="form-field full">
          <label className="form-label">Уровень активности</label>
          <div className="radio-card-group">
            {ACTIVITY_LEVELS.map((item) => (
              <div className="radio-card" key={item.key}>
                <input
                  type="radio"
                  name="activity"
                  id={item.key}
                  checked={item.key === bodyMetrics.levelActivity}
                  onChange={() => onChange("levelActivity", item.key)}
                />
                <label htmlFor={item.key}>
                  <div>
                    <div className="rc-title">{item.label}</div>
                    <div className="rc-sub">{item.sub}</div>
                  </div>
                  <span className="rc-check"></span>
                </label>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="preview-strip">
        <div className="ps-item">
          <span className="ps-val" style={{ color: bmiStatus.color }}>
            {bmi.toFixed(1)}
          </span>
          <span className="ps-label">ИМТ</span>
        </div>
        <div className="ps-item">
          <span className="ps-val accent">{Math.round(tdee)}</span>
          <span className="ps-label">TDEE ккал</span>
        </div>
        <div className="ps-item">
          <span className="ps-val blue">{bodyMetrics.weight}</span>
          <span className="ps-label">Вес, кг</span>
        </div>
      </div>

      <div className="preview-note">
        <svg
          width="12"
          height="12"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <circle cx="12" cy="12" r="10" />
          <line x1="12" y1="16" x2="12" y2="12" />
          <line x1="12" y1="8" x2="12.01" y2="8" />
        </svg>
        {personalInfo.gender === "other"
          ? "Показатели обновляются автоматически • TDEE рассчитан приблизительно — формула пока не учитывает вариант «Другое»"
          : "Показатели обновляются автоматически"}
      </div>
    </div>
  );
}

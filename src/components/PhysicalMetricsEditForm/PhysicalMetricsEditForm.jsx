import "./PhysicalMetricsEditForm.css";

export function PhysicalMetricsEditForm({}) {
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
              defaultValue="181"
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
              defaultValue="78.0"
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
              defaultValue="17.0"
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
            <div className="radio-card">
              <input type="radio" name="activity" id="act-low" />
              <label htmlFor="act-low">
                <div>
                  <div className="rc-title">Низкая</div>
                  <div className="rc-sub">
                    Малоподвижный образ жизни, редкие тренировки
                  </div>
                </div>
                <span className="rc-check"></span>
              </label>
            </div>

            <div className="radio-card">
              <input type="radio" name="activity" id="act-mid" defaultChecked />
              <label htmlFor="act-mid">
                <div>
                  <div className="rc-title">Умеренная</div>
                  <div className="rc-sub">Тренировки 3–5 раз в неделю</div>
                </div>
                <span className="rc-check"></span>
              </label>
            </div>

            <div className="radio-card">
              <input type="radio" name="activity" id="act-high" />
              <label htmlFor="act-high">
                <div>
                  <div className="rc-title">Высокая</div>
                  <div className="rc-sub">
                    Интенсивные тренировки 6–7 раз в неделю
                  </div>
                </div>
                <span className="rc-check"></span>
              </label>
            </div>
          </div>
        </div>
      </div>

      <div className="preview-strip">
        <div className="ps-item">
          <span className="ps-val green">23.5</span>
          <span className="ps-label">ИМТ</span>
        </div>
        <div className="ps-item">
          <span className="ps-val accent">2 732</span>
          <span className="ps-label">TDEE ккал</span>
        </div>
        <div className="ps-item">
          <span className="ps-val blue">78.0</span>
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
        Показатели пересчитаются автоматически после сохранения
      </div>
    </div>
  );
}

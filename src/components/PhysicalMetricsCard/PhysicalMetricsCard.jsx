import "./PhysicalMetricsCard.css";

export function PhysicalMetricsCard() {
  return (
    <div className="card">
      <div className="card-header">
        <div className="card-title-wrap">
          <div
            className="card-icon"
            style={{
              background: "rgba(34, 211, 168, 0.12)",
              color: "var(--green)",
            }}
          >
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
            <div className="card-sub">Рост, вес и производные метрики</div>
          </div>
        </div>
      </div>

      <div className="metrics-grid">
        <div className="metric-tile">
          <div className="mt-val">78.0</div>
          <div className="mt-label">Вес, кг</div>
        </div>
        <div className="metric-tile">
          <div className="mt-val">23.5</div>
          <div className="mt-label">ИМТ</div>
        </div>
        <div className="metric-tile">
          <div className="mt-val">17.0%</div>
          <div className="mt-label">Жир тела</div>
        </div>
      </div>

      <div className="bmi-section">
        <div className="bmi-top">
          <span className="bmi-number" style={{ color: "var(--green)" }}>
            23.5
          </span>
          <span className="bmi-category" style={{ color: "var(--green)" }}>
            Норма
          </span>
        </div>
        <div className="bmi-track">
          <div className="bmi-pointer" style={{ left: "45%" }}></div>
        </div>
        <div className="bmi-labels">
          <span className="bmi-label-item">Дефицит</span>
          <span className="bmi-label-item">Норма</span>
          <span className="bmi-label-item">Избыток</span>
          <span className="bmi-label-item">Ожирение</span>
        </div>
      </div>

      <div className="tdee-box">
        <div className="tdee-title">Суточный расход энергии (TDEE)</div>
        <div className="tdee-value">2 732</div>
        <div className="tdee-sub">Рекомендуемое потребление ккал/день</div>
        <div className="tdee-breakdown">
          <span className="tdee-chip">BMR: 1 763</span>
          <span className="tdee-chip">Активность: умеренная</span>
        </div>
      </div>

      <div>
        <div className="comp-row">
          <span className="comp-item">
            <span
              className="comp-dot"
              style={{ background: "var(--green)" }}
            ></span>
            Мышцы: <b style={{ color: "var(--text1)" }}>64.7 кг</b>
          </span>
          <span className="comp-item">
            Жир: <b style={{ color: "var(--text1)" }}>13.3 кг</b>
            <span
              className="comp-dot"
              style={{ background: "var(--orange)" }}
            ></span>
          </span>
        </div>
        <div className="comp-bar">
          <div className="comp-lean" style={{ flex: 64.7 }}></div>
          <div className="comp-fat" style={{ flex: 13.3 }}></div>
        </div>
      </div>
    </div>
  );
}

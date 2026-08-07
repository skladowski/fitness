import "./PhysicalMetricsCard.css";
export function PhysicalMetricsCard({ recalc }) {
  return (
    <div className="card">
      <div className="card-header">
        <div className="card-title-wrap">
          <div className="card-icon card-icon-bg">
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
            <div className="card-sub">Рост, вес и все производные метрики</div>
          </div>
        </div>
      </div>

      <div className="metrics-grid">
        <div className="metric-tile">
          <div className="mt-val mt-val-blue" id="tileWeight">
            78.0
          </div>
          <div className="mt-label">Вес, кг</div>
        </div>
        <div className="metric-tile">
          <div className="mt-val mt-val-green" id="tileBMI">
            23.6
          </div>
          <div className="mt-label">ИМТ</div>
        </div>
        <div className="metric-tile">
          <div className="mt-val mt-val-orange" id="tileFat">
            17.0%
          </div>
          <div className="mt-label">Жир тела</div>
        </div>
      </div>
      <div className="bmi-section">
        <div className="bmi-top">
          <span className="bmi-number" id="bmiDisplay">
            23.6
          </span>
          <span className="bmi-category bmi-cat-green" id="bmiCategory">
            Норма
          </span>
        </div>
        <div className="bmi-track">
          <div className="bmi-pointer bmi-pointer-pos" id="bmiPointer"></div>
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
        <div className="tdee-value" id="tdeeDisplay">
          2 380
        </div>
        <div className="tdee-sub" id="tdeeSub">
          Рекомендуемое потребление ккал/день
        </div>
        <div className="tdee-breakdown" id="tdeeBreakdown">
          <span className="tdee-chip">BMR: 1 795</span>
          <span className="tdee-chip">Активность: ×1.55</span>
          <span className="tdee-chip">Цель: ±0</span>
        </div>
      </div>

      <div>
        <div className="comp-row">
          <span className="comp-item">
            <span className="comp-dot comp-dot-green"></span>Мышцы:{" "}
            <b id="leanMass" className="comp-val-text">
              64.7 кг
            </b>
          </span>
          <span className="comp-item">
            Жир:{" "}
            <b id="fatMass" className="comp-val-text">
              13.3 кг
            </b>
            <span className="comp-dot comp-dot-orange"></span>
          </span>
        </div>
        <div className="comp-bar">
          <div className="comp-lean" id="leanBar"></div>
          <div className="comp-fat" id="fatBar"></div>
        </div>
      </div>
    </div>
  );
}

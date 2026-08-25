import "./PhysicalMetricsCard.css";
import {
  calculateBMI,
  getBMIStatus,
  calculateTDEE,
  calculateAge,
} from "../../utils/healthMath";
import { ACTIVITY_LEVELS } from "../../constant/activityLevels";

export function PhysicalMetricsCard({ profile }) {
  const bmi = calculateBMI(
    profile.bodyMetrics.weight,
    profile.bodyMetrics.height,
  );
  const bmiStatus = getBMIStatus(bmi);
  const age = calculateAge(profile.personalInfo.birthDate);
  const { tdee, bmr } = calculateTDEE(
    profile.bodyMetrics.weight,
    profile.bodyMetrics.height,
    age,
    profile.bodyMetrics.levelActivity,
    profile.personalInfo.gender,
  );
  const MAX_BMI = 40;
  const MIN_BMI = 15;
  const bmiPosition = ((bmi - MIN_BMI) / (MAX_BMI - MIN_BMI)) * 100;
  const fatMass =
    profile.bodyMetrics.weight * (profile.bodyMetrics.fatPercent / 100);
  const leanMass = profile.bodyMetrics.weight - fatMass;
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
          <div className="mt-val">{profile.bodyMetrics.weight.toFixed(1)}</div>
          <div className="mt-label">Вес, кг</div>
        </div>
        <div className="metric-tile">
          <div className="mt-val" style={{ color: bmiStatus.color }}>
            {" "}
            {bmi.toFixed(1)}
          </div>
          <div className="mt-label">ИМТ</div>
        </div>
        <div className="metric-tile">
          <div className="mt-val">
            {profile.bodyMetrics.fatPercent.toFixed(1)}%
          </div>
          <div className="mt-label">Жир тела</div>
        </div>
      </div>

      <div className="bmi-section">
        <div className="bmi-top">
          <span className="bmi-number" style={{ color: bmiStatus.color }}>
            {bmi.toFixed(1)}
          </span>
          <span className="bmi-category" style={{ color: bmiStatus.color }}>
            {bmiStatus.label}
          </span>
        </div>
        <div className="bmi-track">
          <div
            className="bmi-pointer"
            style={{ left: `${bmiPosition}%` }}
          ></div>
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
        <div className="tdee-value">{tdee.toFixed(0)}</div>
        <div className="tdee-sub">Рекомендуемое потребление ккал/день</div>
        <div className="tdee-breakdown">
          <span className="tdee-chip">BMR: {Math.round(bmr)}</span>
          <span className="tdee-chip">
            Активность:{" "}
            {
              ACTIVITY_LEVELS.find(
                (item) => profile.bodyMetrics.levelActivity === item.key,
              ).label
            }
          </span>
        </div>
      </div>

      <div>
        <div className="comp-row">
          <span className="comp-item">
            <span
              className="comp-dot"
              style={{ background: "var(--green)" }}
            ></span>
            Мышцы:{" "}
            <b style={{ color: "var(--text1)" }}>{leanMass.toFixed(1)} кг</b>
          </span>
          <span className="comp-item">
            Жир:{" "}
            <b style={{ color: "var(--text1)" }}>{fatMass.toFixed(1)} кг</b>
            <span
              className="comp-dot"
              style={{ background: "var(--orange)" }}
            ></span>
          </span>
        </div>
        <div className="comp-bar">
          <div className="comp-lean" style={{ flex: leanMass }}></div>
          <div className="comp-fat" style={{ flex: fatMass }}></div>
        </div>
      </div>
    </div>
  );
}

import "./ProfileHero.css";
import { calculateAge } from "../../utils/healthMath";
import { GENDERS } from "../../constant/genders";
import {
  calculateBMI,
  calculateTDEE,
  getBMIStatus,
} from "../../utils/healthMath";
export function ProfileHero({ profile }) {
  const age = calculateAge(profile.personalInfo.birthDate);
  const genderLabel = GENDERS.find(
    (item) => item.key === profile.personalInfo.gender,
  ).label;
  const bmi = calculateBMI(
    profile.bodyMetrics.weight,
    profile.bodyMetrics.height,
  );
  const bmiStatus = getBMIStatus(bmi);
  const { tdee } = calculateTDEE(
    profile.bodyMetrics.weight,
    profile.bodyMetrics.height,
    age,
    profile.bodyMetrics.levelActivity,
    profile.personalInfo.gender,
  );

  return (
    <div className="profile-hero">
      <div className="avatar-lg">
        {profile.personalInfo.firstName.charAt(0)}
        {profile.personalInfo.lastName.charAt(0)}
      </div>

      <div className="hero-info">
        <div className="hero-name">
          {profile.personalInfo.firstName} {profile.personalInfo.lastName}
        </div>

        <div className="hero-meta">
          <svg
            width="13"
            height="13"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
            <circle cx="12" cy="10" r="3" />
          </svg>
          {profile.personalInfo.city}
          <span style={{ color: "var(--text3)" }}>·</span>
          {age}
          <span style={{ color: "var(--text3)" }}>·</span>
          {genderLabel}
        </div>

        <div className="hero-badges">
          <span className="badge badge-level">
            ⚡ Уровень {profile.personalInfo.level}
          </span>
          <span className="badge badge-streak">
            🔥 {profile.personalInfo.daysInARow} день серии
          </span>
          <span className="badge badge-verified">
            {profile.personalInfo.isConfirmed
              ? "✓ Профиль подтвержден"
              : "✕ Профиль не подтвержден"}
          </span>
        </div>

        <div className="hero-bio">{profile.personalInfo.aboutMe}</div>
      </div>

      <div className="hero-derived">
        <div className="hd-item">
          <span className="hd-val" style={{ color: bmiStatus.color }}>
            {bmi.toFixed(1)}
          </span>
          <span className="hd-label">ИМТ</span>
        </div>
        <div className="hd-item">
          <span className="hd-val" style={{ color: "var(--accent2)" }}>
            {Math.round(tdee)}
          </span>
          <span className="hd-label">TDEE ккал</span>
        </div>
        <div className="hd-item">
          <span className="hd-val" style={{ color: "var(--blue)" }}>
            {profile.bodyMetrics.weight}
          </span>
          <span className="hd-label">Вес, кг</span>
        </div>
      </div>
    </div>
  );
}

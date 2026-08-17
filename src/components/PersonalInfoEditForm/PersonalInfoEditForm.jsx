import "./PersonalInfoEditForm.css";
import { activities } from "../../constant/activities";

const GENDERS = [
  {
    key: "male",
    label: "Мужской",
  },
  {
    key: "female",
    label: "Женский",
  },
  {
    key: "other",
    label: "Другое",
  },
];

const sportKeys = Object.keys(activities).filter(
  (key) => activities[key].isSport,
);
export function PersonalInfoEditForm({ personalInfo, onChange }) {
  return (
    <div className="card">
      <div className="card-header">
        <div className="card-title-wrap">
          <div className="card-icon card-icon-user">
            <svg
              width="15"
              height="15"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
          </div>
          <div>
            <div className="card-title">О пользователе</div>
            <div className="card-sub">Основные данные и предпочтения</div>
          </div>
        </div>
      </div>

      <div className="form-grid">
        <div className="form-field">
          <label className="form-label" htmlFor="first-name">
            Имя
          </label>
          <input
            id="first-name"
            className="form-input"
            type="text"
            value={personalInfo.firstName}
            onChange={(e) => onChange("firstName", e.target.value)}
          />
        </div>

        <div className="form-field">
          <label className="form-label" htmlFor="last-name">
            Фамилия
          </label>
          <input
            id="last-name"
            className="form-input"
            type="text"
            value={personalInfo.lastName}
            onChange={(e) => onChange("lastName", e.target.value)}
          />
        </div>

        <div className="form-field">
          <label className="form-label label-icon" htmlFor="birth-date">
            <svg
              width="13"
              height="13"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <rect x="3" y="4" width="18" height="18" rx="2" />
              <line x1="16" y1="2" x2="16" y2="6" />
              <line x1="8" y1="2" x2="8" y2="6" />
              <line x1="3" y1="10" x2="21" y2="10" />
            </svg>
            Дата рождения
          </label>
          <input
            id="birth-date"
            className="form-input"
            type="date"
            value={personalInfo.birthDate}
            onChange={(e) => onChange("birthDate", e.target.value)}
          />
        </div>

        <div className="form-field">
          <label className="form-label label-icon" htmlFor="city">
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
            Город
          </label>
          <input
            id="city"
            className="form-input"
            type="text"
            value={personalInfo.city}
            onChange={(e) => onChange("city", e.target.value)}
          />
        </div>

        <div className="form-field full">
          <label className="form-label">Пол</label>
          <div className="sex-chips">
            {GENDERS.map((item) => {
              return (
                <button
                  key={item.key}
                  type="button"
                  className={`${item.key === personalInfo.gender ? "sex-chip on" : "sex-chip"}`}
                  onClick={() => onChange("gender", item.key)}
                >
                  {item.label}
                </button>
              );
            })}
          </div>
        </div>

        <div className="form-field full">
          <label className="form-label label-icon" htmlFor="email">
            <svg
              width="13"
              height="13"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <path d="M22 7l-10 6L2 7" />
            </svg>
            Email
          </label>
          <input
            id="email"
            className="form-input"
            type="email"
            value={personalInfo.email}
            onChange={(e) => onChange("email", e.target.value)}
          />
        </div>

        <div className="form-field full">
          <label className="form-label" htmlFor="about">
            О себе
          </label>
          <textarea
            id="about"
            className="form-textarea"
            placeholder="Расскажите о своих целях и тренировках…"
            value={personalInfo.aboutMe}
            onChange={(e) => onChange("aboutMe", e.target.value)}
          />
          <span className="form-hint-text">
            Отображается на странице публичного профиля
          </span>
        </div>

        <div className="form-field full">
          <label className="form-label">Спортивные предпочтения</label>
          <div className="pref-chips">
            {sportKeys.map((key) => (
              <button
                key={key}
                type="button"
                className={
                  personalInfo.fitnessPreferences.includes(key)
                    ? "pref-chip on"
                    : "pref-chip"
                }
                onClick={() => {
                  if (personalInfo.fitnessPreferences.includes(key)) {
                    const result = personalInfo.fitnessPreferences.filter(
                      (pref) => pref != key,
                    );
                    return onChange("fitnessPreferences", result);
                  } else {
                    const result = [...personalInfo.fitnessPreferences, key];
                    return onChange("fitnessPreferences", result);
                  }
                }}
              >
                {activities[key].icon} {activities[key].label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

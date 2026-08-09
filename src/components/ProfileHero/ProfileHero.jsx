import "./ProfileHero.css";

export function ProfileHero() {
  return (
    <div className="profile-hero">
      <div className="avatar-lg">АИ</div>

      <div className="hero-info">
        <div className="hero-name">Алексей Иванов</div>

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
          Москва, Россия
          <span style={{ color: "var(--text3)" }}>·</span>
          32 года
          <span style={{ color: "var(--text3)" }}>·</span>
          Мужской
        </div>

        <div className="hero-badges">
          <span className="badge badge-level">⚡ Уровень 24</span>
          <span className="badge badge-streak">🔥 21 день серия</span>
          <span className="badge badge-verified">✓ Профиль подтверждён</span>
        </div>

        <div className="hero-bio">
          Люблю бег и велоспорт. Тренируюсь 4× в неделю, готовлюсь к первому
          полумарафону.
        </div>
      </div>

      <div className="hero-derived">
        <div className="hd-item">
          <span className="hd-val" style={{ color: "var(--green)" }}>
            23.5
          </span>
          <span className="hd-label">ИМТ</span>
        </div>
        <div className="hd-item">
          <span className="hd-val" style={{ color: "var(--accent2)" }}>
            2 732
          </span>
          <span className="hd-label">TDEE ккал</span>
        </div>
        <div className="hd-item">
          <span className="hd-val" style={{ color: "var(--blue)" }}>
            78.0
          </span>
          <span className="hd-label">Вес, кг</span>
        </div>
      </div>
    </div>
  );
}

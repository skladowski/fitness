import "./PersonalMetricsCard.css";

export function PersonalMetricsCard() {
  return (
    <div className="card">
      <div className="card-header">
        <div className="card-title-wrap">
          <div
            className="card-icon"
            style={{
              background: "rgba(108, 99, 255, 0.12)",
              color: "var(--accent2)",
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
      <div>
        <div
          className="info-key"
          style={{ marginTop: "16px", marginBottom: "4px" }}
        >
          Спортивные предпочтения
        </div>
        <div className="pref-chips">
          <span className="pref-chip">🏃 Бег</span>
          <span className="pref-chip">🚴 Велоспорт</span>
        </div>
      </div>
      <div className="info-list">
        <div className="info-row">
          <span className="info-key">
            <svg
              width="14"
              height="14"
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
            Возраст
          </span>
          <span className="info-val">32 года</span>
        </div>
        <div className="info-row">
          <span className="info-key">
            <svg
              width="14"
              height="14"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <circle cx="12" cy="12" r="10" />
            </svg>
            Пол
          </span>
          <span className="info-val">Мужской</span>
        </div>
        <div className="info-row">
          <span className="info-key">
            <svg
              width="14"
              height="14"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            Город
          </span>
          <span className="info-val">Москва</span>
        </div>
        <div className="info-row">
          <span className="info-key">
            <svg
              width="14"
              height="14"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <path d="M22 7l-10 6L2 7" />
            </svg>
            Email
          </span>
          <span className="info-val">alexey@example.com</span>
        </div>
        <div className="info-row">
          <span className="info-key">
            <svg
              width="14"
              height="14"
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
            На платформе с
          </span>
          <span className="info-val">Сентябрь 2025</span>
        </div>
      </div>

      <div className="card-footer">
        <div className="footer-stat">
          <span className="footer-stat-icon">📅</span>
          <div>
            <div className="footer-stat-label">На платформе</div>
            <div className="footer-stat-val">8 месяцев</div>
          </div>
        </div>
        <div className="footer-stat">
          <span className="footer-stat-icon">🎯</span>
          <div>
            <div className="footer-stat-label">Выполнено целей</div>
            <div className="footer-stat-val">47</div>
          </div>
        </div>
        <div className="footer-stat">
          <span className="footer-stat-icon">🏆</span>
          <div>
            <div className="footer-stat-label">Личных рекордов</div>
            <div className="footer-stat-val">4</div>
          </div>
        </div>
      </div>
    </div>
  );
}
